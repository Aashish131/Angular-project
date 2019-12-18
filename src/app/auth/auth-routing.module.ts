import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from '../manager/manager/manager.component';
import { DeveloperComponent } from '../developer/developer/developer.component';
import { TesterComponent } from '../tester/tester/tester.component';


const routes: Routes = 
[
  {path:'Manager',component:ManagerComponent },
  {path:'Developer',component:DeveloperComponent },
  {path:'Tester',component:TesterComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class AuthRoutingModule { }
