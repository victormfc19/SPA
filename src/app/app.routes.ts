import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';

const APP_ROUTES: Routes = [
    
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'busqueda-heroe/:texto', component: BusquedaHeroeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'} //si no encuentra ninguna ruta ejecuta esta
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);