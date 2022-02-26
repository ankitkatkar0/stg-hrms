import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { IconsComponent } from 'app/pages/icons/icons.component';
import { MapsComponent } from 'app/pages/maps/maps.component';
import { NotificationsComponent } from 'app/pages/notifications/notifications.component';
import { TableListComponent } from 'app/pages/table-list/table-list.component';
import { TypographyComponent } from 'app/pages/typography/typography.component';
import { UserProfileComponent } from 'app/pages/user-profile/user-profile.component';

export const CommonLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    {
        path: 'admin',
        loadChildren: () => import('../../pages/ankhr-admin/ankhr-admin.module')
            .then(m => m.AnkhrAdminModule)
    },
    {
        path: 'employee',
        loadChildren: () => import('../../pages/ankhr-employee/ankhr-employee.module')
            .then(m => m.AnkhrEmployeeModule)
    }
];
