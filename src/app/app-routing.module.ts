import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainContentComponent } from './components/main-content/main-content.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main-content' },
  { path: 'login-page', component:LoginPageComponent },
  { path: 'main-content', component:MainContentComponent },
  { path: 'add-hotel', component:AddHotelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
