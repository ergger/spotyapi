import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean;
  artists: any[] = [];
  error: boolean;
  message: string;
  constructor( private spotify: SpotifyService ) {

  }

  ngOnInit() {
  }

  search(term: string) {
    this.loading = true;
    this.error = false;
    this.spotify.getArtists(term)
    .subscribe( (data: any) => {
      // console.log(data);
      // this.artists = data.artists.items;
      this.artists = data;
      this.loading = false;
    }, (errorMessage) => {
      this.loading = false;
      this.error = true;
      this.message = errorMessage.error.error.message;
    });
  }
}
