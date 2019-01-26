import { Component, OnInit } from '@angular/core';
import { ListInteracionService } from './list-interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public itemsData: Array<any>;
  public currentItem: any;

  constructor (private listInteracionservice: ListInteracionService) {
    listInteracionservice.get().subscribe((data: any) => this.itemsData = data);
  }

  ngOnInit() {
  }

}
