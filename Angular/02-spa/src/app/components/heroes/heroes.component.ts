import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService, private _router: Router ) {

  }
  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

    // console.log(this.heroes);

  }

  // tslint:disable-next-line: typedef
  verHeroe( idx: number ){

    this._router.navigate( ['/heroe', idx] );

  }

}
