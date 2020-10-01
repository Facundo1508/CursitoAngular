import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-carta',
  templateUrl: './heroe-carta.component.html'
})
export class HeroeCartaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indice: number;

  @Output() heroeSelecionado: EventEmitter<number>;

  constructor(private _router: Router) {

    this.heroeSelecionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verHeroe(){

    // this._router.navigate( ['/heroe', this.indice] );
    this.heroeSelecionado.emit( this.indice );

  }

}
