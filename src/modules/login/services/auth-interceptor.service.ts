import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, BehaviorSubject, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  private tokenSubject: BehaviorSubject<string>;
  constructor() {
    this.tokenSubject = new BehaviorSubject<string>(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImQ5YjhkYjMwLWIxYTEtNDcyNy1iZTU5LWNlOWVjYTQ0ZTFiNiIsIm5iZiI6MTcxNTc3NTYyMSwiZXhwIjoxNzE2MzgwNDIxLCJpYXQiOjE3MTU3NzU2MjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMTciLCJhdWQiOiJsb2NhbGhvc3QtYXBpIn0.TKMWCBMcbc8xBZUkn8nyEej432OsNg9mBKnIRFKmc1g'
    );
  }

  setToken(token: string): void {
    this.tokenSubject.next(token);
  }

  getToken(): Observable<string> {
    return this.tokenSubject.asObservable();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.getToken().pipe(
      mergeMap((token: string) => {
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(authRequest);
      })
    );
  }
}
