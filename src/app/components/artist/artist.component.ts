import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  tracks: any[] = [];
  loading: boolean;
  error: boolean;
  message: string;
  constructor(private activateRouter: ActivatedRoute,
              private spotyfyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.activateRouter.params.subscribe( params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
      this.loading = false;
    }, (errorMessage) => {
      this.loading = false;
      this.error = true;
      this.message = errorMessage.error.error.message;
    });
  }

  ngOnInit() {
    this.artist = this.artist;
    this.tracks = this.tracks;
  }

  getArtist(id: string) {
    this.spotyfyService.getArtistById(id).subscribe(data => {
      console.log(data);
      this.artist = data;
    });
  }

  getTopTracks(id: string) {
    this.spotyfyService.getTopTracks(id).subscribe((data: any) => {
      Object.values(data.tracks).forEach( ( value ) => {
        console.log(value);
        this.tracks.push(value);
      });
    });
  }
}
