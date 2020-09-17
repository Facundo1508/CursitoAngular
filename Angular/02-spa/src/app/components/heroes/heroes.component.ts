import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService ) {

  }
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

}
