import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../../../service/auth/guards/auth.guard';
import {UserListComponent} from './components/user-list/user-list.component';
import {Role} from '../../../model/role';
import {UserFormComponent} from './components/user-form/user-form.component';


const routes: Routes = [
  {canActivate: [AuthGuard], path: 'users', component: UserListComponent, data: {roles: [Role.Admin]}},
  {canActivate: [AuthGuard], path: 'saveuser', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
