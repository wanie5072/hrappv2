import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { tap, map } from "rxjs/operators";
import { catchError } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { 

    
  }


  post (serviceName: string, data: any, ){
    
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const options = {headers: headers, withCredentials: false,contentType:'application/json'};
    const url = environment.apiUrl1 + serviceName;
    console.log(url,JSON.stringify(data),options,'call')
    return this.http.post(url, JSON.stringify(data), options);
  }

  post1 (serviceName: string, data: any, ){
    
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const options = {headers: headers, withCredentials: false,contentType:'application/json'};
    const url = environment.apiUrl3 + serviceName;
    console.log(url,JSON.stringify(data),options,'call')
    return this.http.post(url, JSON.stringify(data), options);
  }

  post2 (serviceName: string, data: any, ){
    
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const options = {headers: headers, withCredentials: false,contentType:'application/json'};
    const url = environment.apiUrl2;
    //console.log(url,JSON.stringify(data),options,'call')
    return this.http.post(url, JSON.stringify(data), options);
  }

  get(url){
    return new Promise((resolve,reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },err=>{
        reject(err);
      })
    })

  }


 

}
