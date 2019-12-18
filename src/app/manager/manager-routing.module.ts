import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignprojectComponent } from './assignproject/assignproject.component';
import { ViewbugsComponent } from './viewbugs/viewbugs.component';
import { AllocateprojectComponent } from '../tester/allocateproject/allocateproject.component';
import { AllocateBugComponent } from './allocate-bug/allocate-bug.component';



const routes: Routes = [
  {path:'assignproject',component:AssignprojectComponent},
  {path:'viewbugs',component:ViewbugsComponent},
  {path:'allocatebug',component:AllocateBugComponent}
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
