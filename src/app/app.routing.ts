import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./components/common-layout/common-layout.module').then(m => m.CommonLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
