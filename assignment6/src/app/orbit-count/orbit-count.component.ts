import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  countType(type: string): number {
    let count = 0;
    if(this.satellites){
      for(let satellite of this.satellites){
        if(satellite['type'].toLowerCase() === type.toLowerCase()){
          count += 1;
        }
      }
    }
    return count;
  }

}
