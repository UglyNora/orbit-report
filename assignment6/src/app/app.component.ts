import { Component } from '@angular/core';
import { Satellite } from './satellite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'assignment6';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for (let satellite in fetchedSatellites){
          // TODO: create a Satellite object using 
          let satObj = new Satellite(fetchedSatellites[satellite].name, fetchedSatellites[satellite].type, fetchedSatellites[satellite].launchDate, fetchedSatellites[satellite].orbitType, fetchedSatellites[satellite].operational);
          // TODO: add the new Satellite object to sourceList using: 
          this.sourceList.push(satObj);
          }
       }.bind(this));
    }.bind(this));
 
 }
  
}
