import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerusuario(): Observable<any> {
    const params = new HttpParams().append('page', '1');

    return this.http.get('https://reqres.in/api/user', {
      params
    }).pipe(
      map(resp => resp['data'])
      );
  }
}
