import { Component, OnInit } from '@angular/core';
import { TesterService } from '../tester.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allocateproject',
  templateUrl: './allocateproject.component.html',
  styleUrls: ['./allocateproject.component.css']
})
export class AllocateprojectComponent implements OnInit {

  constructor(private testerService:TesterService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() 
  {

    var obj=JSON.parse(sessionStorage.getItem("userObj"));
    this.user=obj;
    let uId:number=obj.id;
    this.testerService.getAlltesterProject(uId).subscribe(data=>{this.projectList=(data),this.projects=(JSON.parse(this.projectList))})

  }
    
  projectList:any;
  projects:any;
  user:any;
  TesterForm=this.fb.group({
    projects:[this.projectList,[Validators.required]],});
    onSubmit(){
      let projId=this.TesterForm.get('projects').value;
      this.router.navigate(['/reportbug',projId]);
    }

}


