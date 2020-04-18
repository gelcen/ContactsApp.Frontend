import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MycontactsComponent } from './mycontacts/mycontacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AuthGuard } from './helpers/auth.guard';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { Role } from './models/role';
import { DeletedContactsComponent } from './deleted-contacts/deleted-contacts.component';


const routes: Routes = [
  { 
    path: '', 
    component: MycontactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allcontacts',
    component: AllContactsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'deletedcontacts',
    component: DeletedContactsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { 
    path: 'mycontacts', 
    component: MycontactsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'detail/:id', 
    component: ContactDetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'addcontact', 
    component: AddContactComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
