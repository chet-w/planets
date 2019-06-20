import * as THREE from 'three';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetEngineService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.DirectionalLight;
  private lastScrollX: number = 0;

  private spheres: THREE.Mesh[] = [];

  private xDown: number = null;
  private yDown: number = null;

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth * 2, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth * 2 / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(-1, 2, 4);
    this.scene.add(this.light);

    this.makeAllPlanets()
  }

  moveCamera(direction: string): void {
    if (direction === "right") {
      this.camera.translateX(1);
    } else {
      this.camera.translateX(-1);
    }
  }

  animate(): void {
    window.addEventListener('DOMContentLoaded', () => {
      this.render();
    });

    window.addEventListener('resize', () => {
      this.resize();
    });

    document.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
  }


  handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        console.log("left")
        this.camera.translateX(1);
        
      } else {
        console.log("right")
        this.camera.translateX(-1);
      }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.spheres.map(sphere => {
      sphere.rotation.y += 0.005;
    });
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    let width = window.innerWidth * 2;
    let height = window.innerHeight;
    console.log("resizing!")
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  makeAllPlanets() {
    const planets: Array<{ name: string, size: number }> = [
      { name: "mercury", size: 0.5 },
      { name: "venus", size: 0.8 },
      { name: "earth", size: 0.8 },
      { name: "mars", size: 0.6 },
      // { name: "jupiter", size: 1.5 },
      // { name: "saturn", size: 1.3 },
      // { name: "uranus", size: 1.2 },
      // { name: "neptune", size: 1.1 }
    ];

    planets.map((planet, index) => {
      const texture = new THREE.TextureLoader().load("/assets/img/textures/" + planet.name + ".jpg");
      let geometry = new THREE.SphereGeometry(planet.size, 32, 32)
      let material = new THREE.MeshPhongMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      this.spheres.push(mesh);
      this.scene.add(mesh);
      mesh.position.set(1.75 * index, 0, 0);
    })
  }
}