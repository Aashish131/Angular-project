import { Injectable } from '@angular/core';
import { Project } from '../class/project';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { HttpClient } from '@angular/common/http';
import { BugAllocationDetails } from '../class/bug-allocation-details';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  bugDeatilObj:any;
  constructor(private http:HttpClient) { }
  private serviceUrl:string="http://localhost:8089/BugTrajectorySystemFrontend2//getAllProjects";
  private devUrl:string="http://localhost:8089/BugTrajectorySystemFrontend2/getAllDevelopers";
  private tesUrl:string="http://localhost:8089/BugTrajectorySystemFrontend2/getAllTesters";
  private projectallocurl:string="http://localhost:8089/BugTrajectorySystemFrontend2/addProject";
  getProjectData():Observable<Project[]>{
    return this.http.get<Project[]>(this.serviceUrl);
  }
  getDeveloperData():Observable<User[]>{
    return this.http.get<User[]>(this.devUrl);
   
  }
  getTesterdata():Observable<User[]>{
    return this.http.get<User[]>(this.tesUrl);
  }
  addProjectList(allocpro:any):Observable<any>{
    return this.http.post<any>("http://localhost:8089/BugTrajectorySystemFrontend2/addProject",allocpro,{responseType:'text'as 'json'});
  } 
  private bugDetailUrl="http://localhost:8089/BugTrajectorySystemFrontend2/viewBugDetails";
  getBugDetail():Observable<BugAllocationDetails[]>{
    return this.http.get<BugAllocationDetails[]>(this.bugDetailUrl);
  }
  setBugDetails(b:any){
    this.bugDeatilObj=b;
    
  }
getBugDetails(){
  console.log('In Service : '+this.bugDeatilObj);
  return this.bugDeatilObj;
}
getDeveloperList(buAllocationId:number):Observable<User[]>{
  return this.http.get<User[]>("http://localhost:8089/BugTrajectorySystemFrontend2/developerList/"+buAllocationId,{responseType: 'text' as 'json'});
}
bugAllocate(bugAllocateId:number,projectId:string,bugType:string,desc:string,userId:number,endDate:Date,createdDate:Date):Observable<string>{
  return this.http.get<string>("http://localhost:8089/BugTrajectorySystemFrontend2/bugAllocation?bugType="+bugType+"&&bugAllocateId="+bugAllocateId+"&&desc="+desc+"&&projectId="+projectId+"&&userId="+userId+"&&endDate="+endDate+"&&createdDate="+createdDate,{responseType: 'text' as 'json'});
 }


}
