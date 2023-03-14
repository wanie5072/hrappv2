import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constant';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

export interface User {
  name: string;
  role: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>('');

  constructor(
    private httpService: HttpService, 
    private storageService: StorageService, 
    private router: Router,
    ) {}



    getUserData(){
      this.storageService.get(AuthConstants.AUTH).then(res => {
        console.log(res);
        this.userData$.next(res[0]);
      });

    }

    getUserDataPromise(){
      return new Promise((resolve,reject)=>{

        this.storageService.get(AuthConstants.AUTH).then(res => {
          console.log(res);
          resolve(res[0]);
        },_=>{
          reject(null);
        });
  


      })

    }

    login(postData: any): Observable<any> {
      return this.httpService.post1('login', postData);
      // return this.httpService.post('logintest', postData);
      }

    //logout(postData: Observable<any>){
    //logout(postData: any): void {
    logout(){
      this.storageService.removeItem(AuthConstants.AUTH).then(res => {
        this.userData$.next('');
        this.router.navigate(['']);
      }); 
    }

    applyleave(postData: any)
    {
      return new Promise((resolve,reject)=>{
        this.httpService.post1('app/submitleave', postData)
        .subscribe(res=>{
          resolve(res);
        },err=>{
          reject(err);
        })
      })

    }

    leavedetail(postData: any): Observable<any> {
      return this.httpService.post('leavedetail', postData);
      }

      leavedetailPromise(postData) {

        return new Promise((resolve,reject)=>{

          // console.log(postData);
          this.httpService.post('leavedetail', postData)
          .subscribe(res=>{
            resolve(res);
          },err=>{
            reject(err);
          })
          
        })
        
        
      }



    leaveapprove(postData: any): Observable<any> {
      return this.httpService.post('updateapprove', postData);
      }  

    typeofleave(postData: any): Observable<any> {
      return this.httpService.post('leavetype', postData);
      }  
    
    // leavebalance(postData: any): Observable<any> {
    //   console.log(postData);
    //   return this.httpService.post1('leavesummary/', postData);
    //   } 

    leavebalance(postData: any): Observable<any> {
      return this.httpService.post1('leavesummary/', postData);
      }

      leavebalancePromise(postData) {

        return new Promise((resolve,reject)=>{

          // console.log(postData);
          this.httpService.post1('leavesummary/', postData)
          .subscribe(res=>{
            resolve(res);
          },err=>{
            reject(err);
          })
          
        })
        
        
      }

    checkIn(postData: any): Observable<any> {
      console.log(postData);
      return this.httpService.post2('dailycheck', postData);
      }

    checkOut(postData: any): Observable<any> {
      console.log(postData);
      return this.httpService.post2('dailycheck', postData);
      }

    listName(postData: any): Observable<any> {
      console.log(postData);
      return this.httpService.post2('dailycheck', postData);
      }
}
