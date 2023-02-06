import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DemotableComponent } from './demotable/demotable.component';
import { TabComponent } from './tab/tab.component';
import { DaxComponent } from './dax/dax.component';
import { VformComponent } from './vform/vform.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table-view', component: TableViewComponent },
  { path: 'demotable', component: DemotableComponent },
  {path:'tab',component:TabComponent,
children:[
  {path:'dax',component:DaxComponent},
  {path:'vform',component:VformComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}