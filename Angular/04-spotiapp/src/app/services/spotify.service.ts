import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQDVB17lK2TQLNqIAh2F0JJx-3ntBkh7_54dOe167NhD47HdTcRAfza47wU1ntVlxUiqhdcna8GCp7vEQT0'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases(){

    // const headers = new HttpHeaders ({
    //   'Authorization' : 'Bearer BQD15ecALi3E9D2U56KR5465ERzoEt2sHXof2IPqdWhRw3q6BFQCCkxVlfnhDOCjOGLaQIFow6-i50A9myA'
    // });

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items));
  }

  getArtists( termino: string){

    // const headers = new HttpHeaders ({
    //   'Authorization' : 'Bearer BQD15ecALi3E9D2U56KR5465ERzoEt2sHXof2IPqdWhRw3q6BFQCCkxVlfnhDOCjOGLaQIFow6-i50A9myA'
    // });

    return this.getQuery(`search?q=${ termino }'&type=artist`)
               .pipe ( map( data=> data['artists'].items));
  }

  getArtist( id: string){

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string){

    return this.getQuery(`artists/${id}/top-tracks?market=AR`)
               .pipe ( map( data=> data['tracks']));
  }



}
