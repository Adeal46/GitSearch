import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from '../github/github.component';
import { RepositoriesComponent } from '../repositories/repositories.component';

const routes: Routes = [
  { path: 'users', component: GithubComponent },
  {path: 'repositories', component: RepositoriesComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    GithubComponent,
    RepositoriesComponent,
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
