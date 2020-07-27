import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyComponent } from 'src/app/pages/company/company.component';
import { CardsComponent } from 'src/app/pages/cards/cards.component';
import {DummyFormComponent} from 'src/app/pages/dummy-form/dummy-form.component';
import {NewFormsComponent} from 'src/app/pages/new-forms/new-forms.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CompanyComponent,
    CardsComponent,
    DummyFormComponent,
    NewFormsComponent
  ]
})

export class AdminLayoutModule {}
