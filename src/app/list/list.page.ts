import { Component, OnInit } from '@angular/core';
import { PlanetEngineService } from "../planet-engine.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  constructor(private planetEngineService: PlanetEngineService) {
    
  }

  ngOnInit() {
    this.planetEngineService.createScene("planet");
    this.planetEngineService.render();
    this.planetEngineService.animate();

  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
