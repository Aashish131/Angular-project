import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager/manager.component';

import { AssignprojectComponent } from './assignproject/assignproject.component';
import { ViewbugsComponent } from './viewbugs/viewbugs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllocateBugComponent } from './allocate-bug/allocate-bug.component';


@NgModule({
  declarations: [ManagerComponent,  AssignprojectComponent, ViewbugsComponent, AllocateBugComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  exports:[ManagerComponent]
})
export class ManagerModule { }
