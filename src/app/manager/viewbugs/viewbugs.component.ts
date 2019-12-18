import { Component, OnInit } from '@angular/core';
import { BugAllocationDetails } from 'src/app/class/bug-allocation-details';
import { ManagerService } from '../manager.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbugs',
  templateUrl: './viewbugs.component.html',
  styleUrls: ['./viewbugs.component.css']
})
export class ViewbugsComponent implements OnInit {

  constructor(private manangerService:ManagerService,private fb:FormBuilder,private router:Router) { }
bugDetailList:BugAllocationDetails[];
  ngOnInit() {
    this.manangerService.getBugDetail().subscribe(data=>this.bugDetailList=data);
  }
  onClick(b:any){
   console.log('Object : '+JSON.stringify(b)); 
  this.manangerService.setBugDetails(b);
}


}
