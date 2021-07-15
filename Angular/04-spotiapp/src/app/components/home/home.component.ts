import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  // paises: any[]=[];

  // constructor( private http: HttpClient) { 

  //   console.log('Constructor del home hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //       .subscribe( (resp:any) =>{
  //         this.paises=resp;
  //         console.log(resp);
  //       })

  // }

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  errorMensaje: string;

  constructor ( private spotify: SpotifyService) {
    
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe((data: any) =>{
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorServicio)=>{

          this.loading = false;
          this.error = true;
          this.errorMensaje = errorServicio.error.error.message;
          console.log(errorServicio);
          console.log(this.errorMensaje);

        });
        
  }

  ngOnInit(): void {
  }

}
