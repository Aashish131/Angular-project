import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesterRoutingModule } from './tester-routing.module';
import { TesterComponent } from './tester/tester.component';
import { AllocateprojectComponent } from './allocateproject/allocateproject.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportbugComponent } from './reportbug/reportbug.component';


@NgModule({
  declarations: [TesterComponent, AllocateprojectComponent, ReportbugComponent],
  imports: [
    CommonModule,
    TesterRoutingModule,ReactiveFormsModule,HttpClientModule
  ],exports:[TesterComponent]
})
export class TesterModule { }
