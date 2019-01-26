import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateItemComponent } from './add-or-update-item.component';

describe('AddOrUpdateItemComponent', () => {
  let component: AddOrUpdateItemComponent;
  let fixture: ComponentFixture<AddOrUpdateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
