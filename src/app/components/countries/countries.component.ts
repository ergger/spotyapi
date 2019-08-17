import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any[] = [];

  constructor( private http: HttpClient) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (response: any) => {
      this.countries = response;
      console.log(response)
    });
  }

  ngOnInit() {
  }

}

