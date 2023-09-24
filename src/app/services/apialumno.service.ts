import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIAlumnoService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }
    // Se establece la base url del API a consumir(solo get)
    apiURL = 'http://192.168.0.5:3000'; //192.168.0.1
    //apiURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }
 
  //uno solo
  getUsuario(userId):Observable<any>{
    return this.http.get(this.apiURL+'/users/'+userId).pipe(
    retry(3)
  );
  }
  //Todo los usuarios
  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }
  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
    retry(3)
    );
  }
  getPost(id):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(
    retry(3)
    );
  }
  //CRear
  createPost(post):Observable<any>{
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions).pipe(
    retry(3)
    );
  }
  //Actualizar
  updatePost(id,post):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(
    retry(3)
    );
  }
  //Eliminar
  deletePost(id):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }      

}


