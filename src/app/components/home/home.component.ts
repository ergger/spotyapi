import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  newSingles: any[] = [];
  error: boolean;
  message: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data);
      // this.newSingles = data.albums.items
      this.newSingles = data;
      this.loading = false;
    }, ( errorService ) => {
      this.loading = false;
      this.error = true;
      this.message = errorService.error.error.message;
    });
  }

  ngOnInit() {
  }

}
