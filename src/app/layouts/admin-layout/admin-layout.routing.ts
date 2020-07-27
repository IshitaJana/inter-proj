import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { CompanyComponent } from 'src/app/pages/company/company.component';
import {DummyFormComponent} from 'src/app/pages/dummy-form/dummy-form.component';
import {NewFormsComponent} from 'src/app/pages/new-forms/new-forms.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    {path:'company',            component: CompanyComponent},
    {path: 'company/new-forms', component: NewFormsComponent},
    {path: 'company/new-forms/dummy-form', component: DummyFormComponent}
];
