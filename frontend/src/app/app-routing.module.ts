import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoggedInGuard } from './guards/auth/logged-in.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoggedOutGuard } from './guards/auth/logged-out.guard';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent, canActivate: [LoggedOutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
