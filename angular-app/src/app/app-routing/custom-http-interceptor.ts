import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  url: string = 'http://localhost:3000';

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url } = req;

    if (url !== `${this.url}/documents`) {
      req = req.clone({ url: `${this.url}/${url}` });
    }

    return next.handle(req).pipe(
      retry(2),

      catchError((error: HttpErrorResponse) => {
        alert(`Http Error: ${req.url}`);
        return throwError(error);
      })
    );
  }
}
