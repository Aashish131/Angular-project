import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BugServiceService {

  constructor(private http:HttpClient) { }
 
  validate(Emailid,password):Observable<any>{
     return this.http.post<any>("http://localhost:8089/BugTrajectorySystemFrontend2/loginFormSubmitController?Emailid="+Emailid+"&&password="+password,null);
    // return null;
  }
 
}
