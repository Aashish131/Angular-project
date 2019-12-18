import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../class/project';
import { Severity } from '../class/severity';
import { BugType } from '../class/bug-type';
import { BugStatus } from '../class/bug-status';

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  constructor(private http:HttpClient) { }
  private  projectUrl="http://localhost:8089/BugTrajectorySystemFrontend2/proList/";
  private sevUrl="http://localhost:8089/BugTrajectorySystemFrontend2/severityList";
  private bugUrl="http://localhost:8089/BugTrajectorySystemFrontend2/bugType";
  private statusUrl="http://localhost:8089/BugTrajectorySystemFrontend2/bugStatus";
  

  getAlltesterProject(id:any):Observable<Project[]>
  {
    return  this.http.get<Project[]>(this.projectUrl+id,{responseType:'text'as 'json'});

  }
  getSeverityData():Observable<Severity[]>{
     return this.http.get<Severity[]>(this.sevUrl);
     }
     getBugData():Observable<BugType[]>{
      return this.http.get<BugType[]>(this.bugUrl);
     
    }
    getProjectById(projId:string):Observable<Project>{
      return this.http.get<Project>("http://localhost:8089/BugTrajectorySystemFrontend2/getProject/"+projId);
    }

    
    bugAllocation(projId:string,severity:string,bugType:string,desc:string,id:number):Observable<string>{

      
           return this.http.get<string>("http://localhost:8089/BugTrajectorySystemFrontend2/BugSuccessfullyAllocated?bugType="+
           bugType+"&&severity="+severity+"&&desc="+desc+"&&projectId="+projId+"&&userId="+id,{responseType: 'text' as 'json'});
         }
    
    getStatus():Observable<BugStatus[]>{
              return this.http.get<BugStatus[]>(this.statusUrl);
             }

  
    
  


}
