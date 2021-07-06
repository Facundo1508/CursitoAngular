import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQCeTjaE0fRVN-Z5rF4_DA-2t6W88B0a59b5mK9vLPLS3QQ8Kk-l806TQH3JzjrhSpq0-1Dw48tHhrOEg34'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
               .pipe( map( data =>{
                  return data['albums'].items
               }));
  }

  getArtist( termino: string){

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQCeTjaE0fRVN-Z5rF4_DA-2t6W88B0a59b5mK9vLPLS3QQ8Kk-l806TQH3JzjrhSpq0-1Dw48tHhrOEg34'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers });
  }


}
