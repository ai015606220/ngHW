import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { InfoComponent } from './info/info.component';
import { CountComponent } from './info/count/count.component';
import { DetailComponent } from './info/detail/detail.component';
import { NewToDoFormComponent } from './new-to-do-form/new-to-do-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    InfoComponent,
    CountComponent,
    DetailComponent,
    NewToDoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
