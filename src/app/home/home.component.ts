import { Component, Input, OnInit } from '@angular/core';
import { ListInteracionService } from '../list-interaction.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public itemsData: Array<any>;
  public currentItem: any;

  
  constructor ( private listInteracionservice: ListInteracionService) {
    listInteracionservice.get().subscribe((data: any) => this.itemsData = data);
    // this.currentItem = this.setiniti();
  }
  private setInitialValuesForItemsData () {
    return {
      id: undefined,
      model: '',
      brand: ''      
    }
  }

public createOrUpdateItem = function(item: any) {
  
    let itemWithId;
    itemWithId = _.find(this.itemsData, (el => el.id === item.id));

    if (itemWithId) {
      const updateIndex = _.findIndex(this.itemsData, {id: itemWithId.id});
      this.workoutService.update(item).subscribe(
        itemRecord =>  this.itemsData.splice(updateIndex, 1, item)
      );
    } else {
      this.workoutService.add(item).subscribe(
        itemRecord => this.itemsData.push(item)
      );
    }

    this.currentItem = this.setInitialValuesForItemsData();
  };

  ngOnInit() {
  }

}
