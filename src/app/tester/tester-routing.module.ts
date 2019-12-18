import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllocateprojectComponent } from './allocateproject/allocateproject.component';
import { ReportbugComponent } from './reportbug/reportbug.component';


const routes: Routes = [
  {path:'allocateproject',component:AllocateprojectComponent},
  {path:'reportbug/:projId',component:ReportbugComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesterRoutingModule { }
