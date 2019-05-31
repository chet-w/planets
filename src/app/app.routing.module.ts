import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from "../pages/home/home";
import { PlanetsPage } from "../pages/planets/planets";

const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'planets', component: PlanetsPage },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})


export class AppRoutingModule { }