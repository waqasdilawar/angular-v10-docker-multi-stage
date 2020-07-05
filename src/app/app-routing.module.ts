import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users'},
  { path: 'users', component: UserComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/users' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
