import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page11Component } from './page1/page1-1/page1-1.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component,
    children: [
      { path: 'page1-1', component: Page11Component }
    ]
  },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
