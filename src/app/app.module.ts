import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { InfoComponent } from './info/info.component';
import { CountComponent } from './info/count/count.component';
import { DetailComponent } from './info/detail/detail.component';
import { NewToDoFormComponent } from './new-to-do-form/new-to-do-form.component';
import { AppRoutingModule } from './app-routing.module';

import { DataServiceService } from './data-service.service';
import { CapitalizePipe } from './capitalize.pipe';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page11Component } from './page1/page1-1/page1-1.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    InfoComponent,
    CountComponent,
    DetailComponent,
    NewToDoFormComponent,
    CapitalizePipe,
    Page1Component,
    Page2Component,
    Page11Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
