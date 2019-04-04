import { Injectable } from '@angular/core';
import * as carouselData from '../assets/carousels.json'

@Injectable({
  providedIn: 'root'
})
export class DoorDatabaseService {
doors: any;

public getDoors(id: string){
this.doors = carouselData;

return this.doors.default.carousels[id];

}


  constructor() { }
}
