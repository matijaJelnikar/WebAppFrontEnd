import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-or-update-item',
  templateUrl: './add-or-update-item.component.html',
  styleUrls: ['./add-or-update-item.component.css']
})
export class AddOrUpdateItemComponent implements OnInit {


  @Output() itemCreated = new EventEmitter<any>();
  @Input() itemInfo: any;

  public buttonText = 'Save';

  constructor() { 
    this.clearItemInfo(); 
  }

  ngOnInit() {
  }

  private clearItemInfo = function() {
    // Create an empty object
    this.itemInfo = {
      id: undefined,
      model: '',
      brand: ''
    };
  };

  public addOrUpdateItemRecord = function(event) {
    this.itemCreated.emit(this.itemInfo);
    this.clearItemInfo();
  };

  public editClicked = function(record) {
    this.currentItem = record;
  };

  public newClicked = function() {
    this.currentItem= this.setInitialValuesForItemData(); 
  };

  public deleteClicked(record) {
    const deleteIndex =  _.findIndex(this.itemInfo, {id: record.id});
    this.itemInfo.remove(record).subscribe(
      result => this.itemInfo.splice(deleteIndex, 1)
    );
  }
}
