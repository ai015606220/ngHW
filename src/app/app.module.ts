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

import { DataServiceService } from './data-service.service';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    InfoComponent,
    CountComponent,
    DetailComponent,
    NewToDoFormComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
