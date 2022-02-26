import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

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
    },
    {
        path: 'learning',
        loadChildren: () => import('../../learning/learning.module')
            .then(m => m.LearningModule)
    }
];
