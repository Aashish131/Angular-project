import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allocate-bug',
  templateUrl: './allocate-bug.component.html',
  styleUrls: ['./allocate-bug.component.css']
})
export class AllocateBugComponent implements OnInit {

  bugDetails:any;
  deveList:any;
 developer:any;
 userId:number;
 createdDate:any;
 endDate:any;

 constructor(private manangerService:ManagerService,private fb:FormBuilder,private router:Router){}
 AssignBug:FormGroup;
 ngOnInit() {
   this.bugDetails=this.manangerService.getBugDetails();
   
   let buAllocationId=this.bugDetails.bugAllocateId;
   console.log(buAllocationId);
  this.manangerService.getDeveloperList(buAllocationId).subscribe(data=>{this.developer=(data),this.deveList=(JSON.parse(this.developer))});
 }
 onSubmit(){
  
   this.manangerService.bugAllocate(this.bugDetails.bugAllocateId,this.bugDetails.projObj.projId,
     this.bugDetails.bugTypeObj.bId,this.bugDetails.desc,this.userId,this.endDate,this.createdDate).subscribe(data=>{
     
     //  console.log(this.userId);
  //  console.log(this.createdDate);
  //  console.log(this.endDate);
      this.router.navigate(['./viewAllBug']);
      alert("Bug Sucessfully Allocated");})
     }

}
