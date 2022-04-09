import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
export interface IUser {
  userName: string,
  userPassword: string,
}
 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  validateCredentials(username: string, password: string): Observable<string> {
    var userObj: IUser;
    userObj = { userName: username, userPassword: password };
    return this.http.post<string>('http://127.0.0.1:8000/api/login/', userObj)
  
}

login(data: string):Observable<any>{
  console.log('this is in login method,service')
  return this.http.post('http://127.0.0.1:8000/api/login/',data)
  
}

register(data: string):Observable<any>{
  console.log('this is in register method,service')
  return this.http.post('http://127.0.0.1:8000/api/register/',data)

}

}