import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { BugServiceService } from 'src/app/bug-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  
title='ReactiveFormDemo2'
constructor(private fb:FormBuilder,private bugservice:BugServiceService,private router:Router){}
loginForm=this.fb.group({
  Emailid:['',Validators.required],
  password:['',[Validators.minLength(3),Validators.required]]
}); 
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.loginForm.value);
     this.bugservice.validate(this.loginForm.value.Emailid,this.loginForm.value.password).subscribe(
       data=>
       {
         let uObj=data;
         sessionStorage.setItem("userObj",JSON.stringify(uObj));
         if(uObj.desg=='ProjectManager')
          {
          
            this.router.navigateByUrl('/Manager');
            alert("manager aashish");
          }
          
         if(uObj.desg=='tester')
         {
           this.router.navigateByUrl('/Tester');
           alert("Tester");

         }
         
         if(uObj.desg=='developer')
          {
            this.router.navigateByUrl('/Developer');
            alert("developer");

          }
            

        },
        error=>{
          ("invalid credentials");
        });
    
    }
  
}
