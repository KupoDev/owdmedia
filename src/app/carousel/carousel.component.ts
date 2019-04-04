import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DoorDatabaseService } from '../door-database.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  title: string;
  data: any;
  images : string[] = []

  constructor(
    private route: ActivatedRoute,
    private service: DoorDatabaseService
  ) {
  

  }
    
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.title = id;
    this.data = this.service.getDoors(id);
    for (let i in this.data) {
      this.images.push(`../../../assets/carrousel/${this.data[i]}`);
    }
  }

}
