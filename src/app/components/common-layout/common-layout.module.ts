import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonLayoutRoutes } from './common-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from 'app/pages/user-profile/user-profile.component';
import { TableListComponent } from 'app/pages/table-list/table-list.component';
import { IconsComponent } from 'app/pages/icons/icons.component';
import { MapsComponent } from 'app/pages/maps/maps.component';
import { NotificationsComponent } from 'app/pages/notifications/notifications.component';
import { TypographyComponent } from 'app/pages/typography/typography.component';
import { UpgradeComponent } from 'app/pages/upgrade/upgrade.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CommonLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class CommonLayoutModule { }
