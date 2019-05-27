import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptoService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token-usuario': 'ABC55487FDSFD4878REREFSF211SFD'
    });

    const newReq = req.clone({
      headers
    });

    return next.handle(newReq).pipe(
      catchError(this.handlerError)
    );
  }

  handlerError(error: HttpErrorResponse) {
    console.log(`Sucedió un error`, error);
    return throwError(error);
  }
}
