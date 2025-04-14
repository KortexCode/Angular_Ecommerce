import { Routes } from '@angular/router';
import { ListComponent } from '@products/pages/list/list.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
export const routes: Routes = [
  {path:'', component: LayoutComponent, children: [
    {path:'home', title: 'Home', component: ListComponent},
    {path:'about', title: 'About', component: AboutComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**', title: 'Not Found', component: NotFoundComponent},
  ]},
];
