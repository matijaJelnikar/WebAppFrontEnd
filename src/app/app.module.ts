import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridItemsComponent } from './grid-items/grid-items.component';
import { AddOrUpdateItemComponent } from './add-or-update-item/add-or-update-item.component';
import { RouterModule, Routes } from '@angular/router';

import { ListInteracionService } from './list-interaction.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridItemsComponent,
    AddOrUpdateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ListInteracionService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
