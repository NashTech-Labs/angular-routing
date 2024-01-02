import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full', // Redirect to login page on empty path
  },
  {
    path: 'login',
    component: LoginComponent, // Route for the login component
  },
  {
    path: 'register',
    component: RegisterComponent, // Route for the register component
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Route for the dashboard component
  },
  {
    path: '**',
    component: NotfoundComponent, // Route for any unmatched path, displaying the not found component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
