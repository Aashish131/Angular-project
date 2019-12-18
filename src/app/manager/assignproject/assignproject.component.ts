import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { User } from 'src/app/class/user';
import { ManagerService } from '../manager.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignproject',
  templateUrl: './assignproject.component.html',
  styleUrls: ['./assignproject.component.css']
})
export class AssignprojectComponent implements OnInit {

  constructor(private manangerService:ManagerService,private fb:FormBuilder,private router:Router) { }
  projectDetail:Project[];
  developerDetail:User[];
  testerDetail:User[];

  ngOnInit() {
    this.manangerService.getProjectData().subscribe(data=>{
      this.projectDetail=data
      console.log(this.projectDetail);
    });
   
    this.manangerService.getDeveloperData().subscribe(data=>this.developerDetail=data);
    this.manangerService.getTesterdata().subscribe(data=>this.testerDetail=data);
  }
  projectAllocationForm =this.fb.group({
     project:[this.projectDetail,Validators.required],
     developer:[this.developerDetail,Validators.required],
     tester:[this.testerDetail,Validators.required]
   });
 
  onSubmitForm(){
    
      let obj=new Project();
      
      obj.projId=this.projectAllocationForm.get('project').value;
      obj.user=this.projectAllocationForm.get('tester').value;
      //console.log(this.projectAllocationForm.get('project').value);
  
      for(let userObj of this.projectAllocationForm.get('developer').value){
        obj.user.push(userObj);
      }
      
      console.log(obj);
      
        this.manangerService.addProjectList(obj).subscribe
        (
           data=>{
           alert("Project Allocated successfully");
           this.router.navigate(['./assignproject']);
         },
    
       error=>{
         
         this.router.navigate(['./assignproject']);
         //alert("Already Allocated this Project");
       });
    
  
    }
  

}
