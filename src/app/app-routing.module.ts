import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';

import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';

const routes: Routes = [
  {path:'', component:DefaultComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'posts', component: PostsComponent}
  ]

},
  {path:'test', component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
