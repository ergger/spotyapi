import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service ready!');
  }

  getQuery(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQBT-6RIRw_JCMVfp47emDveQO7VooZByPsaUI8-HIXyCyUO3sCUXVcUsnaiOo3k2EUYwpcNXOu1jpYrazo'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe(map((data: any) => {
      return data.albums.items;
     }));
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBI8o1sApfykwS8r30SEQLcdtX6_0qFlo9KGRe1LIIhyKjvRvvpwPgR1YhME2uW-E0boODmroG2Ws6ErFw'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
     })
     .pipe(map(data => {
      return data['albums'].items;
     }));*/
    /*.subscribe( data => {
      console.log(data);
    })*/
  }

  getArtists(word: string) {
    return this.getQuery('search?q=' + word + '&type=artist')
    .pipe(map((data: any) => data.artists.items));
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBI8o1sApfykwS8r30SEQLcdtX6_0qFlo9KGRe1LIIhyKjvRvvpwPgR1YhME2uW-E0boODmroG2Ws6ErFw'
    });
    return this.http.get('https://api.spotify.com/v1/search?q='+word+'&type=artist', {
      headers
     })
     .pipe(map(data => data['artists'].items));*/
  }

  getArtistById(id: string) {
    return this.getQuery('artists/' + id); // .pipe(map(data => data['artist'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery('artists/' + id + '/top-tracks?country=us'); // .pipe(map(data => data['artist'].items));
  }
}
