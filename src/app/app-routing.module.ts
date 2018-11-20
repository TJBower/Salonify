import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StylistsComponent } from './stylists/stylists.component';
import { PostsComponent } from './posts/posts.component';
import { RequestsComponent } from './requests/requests.component';
import { DetailsComponent } from "./details/details.component";


const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: 'stylists',
  component: StylistsComponent
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'requests',
  component: RequestsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
