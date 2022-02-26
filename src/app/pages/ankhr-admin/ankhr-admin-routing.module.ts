import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnkhrAdminComponent } from './ankhr-admin.component';

const routes: Routes = [
  {
    path:'',
    component:AnkhrAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnkhrAdminRoutingModule { }
