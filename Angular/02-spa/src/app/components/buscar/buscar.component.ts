import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: any [] = [];
  termino: string;

  constructor( private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private _router: Router ) {

  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe( params => {

      // console.log( ['termino'] );
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      this.termino = params[ 'termino' ];
      console.log( this.heroes );

    });
  }

  verHeroe( idx: number ){

    this._router.navigate( ['/heroe', idx] );

  }
}
