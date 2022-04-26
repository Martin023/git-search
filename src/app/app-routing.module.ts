import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';



const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repository', component: RepositorySearchComponent},
  { path: 'nav-bar', component: NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
