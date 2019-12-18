import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/class/project';
import { Severity } from 'src/app/class/severity';
import { BugType } from 'src/app/class/bug-type';
import { BugStatus } from 'src/app/class/bug-status';
import { ActivatedRoute, Router } from '@angular/router';
import { TesterService } from '../tester.service';

@Component({
  selector: 'app-reportbug',
  templateUrl: './reportbug.component.html',
  styleUrls: ['./reportbug.component.css']
})
export class ReportbugComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private testerService:TesterService,private fb:FormBuilder,private router:Router) { }
  pObj:Project;
  severityList:Severity[];
  bugDetail:BugType[];
  statusDetail:BugStatus[];
  projectId:any;
  ngOnInit() {
    this.projectId=this.activatedRoute.snapshot.paramMap.get('projId');
    console.log('Project Id in Report Bug Component= '+this.projectId);
   

    this.testerService.getSeverityData().subscribe(data=>{
      this.severityList=data
      console.log(this.severityList);
    });
    this.testerService.getBugData().subscribe(data=>{
      this.bugDetail=data
      console.log(this.bugDetail);
    });
    this.testerService.getStatus().subscribe(data=>{
      this.statusDetail=data
      console.log(this.statusDetail);
    });
    this.testerService.getProjectById(this.projectId).subscribe(data=>{
      console.log(data)
      this.pObj=data;
    });

    
  }
    bugAllocForm =this.fb.group({
    projectId:[this.pObj,Validators.required],
    bugSeverity:[this.severityList,Validators.required],
    bugType:[this.bugDetail,Validators.required],
    status:[this.statusDetail,Validators.required],
    Description:['',Validators.required]
  });
  onSubmit(){

    
    console.log(this.bugAllocForm.value);

    //let projId=this.bugAllocForm.get('projectId').value;
  
    let bugSeverity=this.bugAllocForm.get('bugSeverity').value;
    let bugType=this.bugAllocForm.get('bugType').value;
    console.log('Bug Type : '+bugType);
    let Description=this.bugAllocForm.get('Description').value;


    let userObj=JSON.parse(sessionStorage.getItem("userObj"));
    let id=userObj.id;
    console.log('Desc = '+Description);
 
    this.testerService.bugAllocation(this.projectId,bugSeverity,bugType,Description,id).subscribe(data=>{
      console.log(data);
    })
    alert("bug allocated successfully");

  }



}
