import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {
  
  heroe:any = {};
  noexiste:boolean;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService
    ){}

  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.buscarHeroes(params['texto'])[0];
      
      console.log(this.heroe == undefined)
      //this.tamanio = this.heroesService.buscarHeroes(params['texto']).length;
      this.noexiste = this.heroe == undefined;
    });
   
  }


}
