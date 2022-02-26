import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes =[
  {
    path: '',
    component: CommonLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/common-layout/common-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
