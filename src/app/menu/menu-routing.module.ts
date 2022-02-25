import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from 'app/maps/maps.component';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'btn1', component: MapsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
