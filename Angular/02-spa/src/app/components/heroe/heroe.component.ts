import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  // tslint:disable-next-line: variable-name
  constructor( private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {

    this._activatedRoute.params.subscribe( params => {

      console.log(params.id);
      this.heroe = this._heroesService.getHeroe( params.id );
      console.log(this.heroe);

    });

  }

  ngOnInit(): void {
  }

}
