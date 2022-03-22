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
  URL: string = 'http://localhost:3000';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url: requestURL } = req;

    req = !requestURL.startsWith(this.URL)
      ? req.clone({ url: `${this.URL}/${requestURL}` })
      : req;

    return next.handle(req).pipe(
      retry(2),

      catchError((error: HttpErrorResponse) => {
        alert(`Http Error: ${req.url}`);
        return throwError(error);
      })
    );
  }
}
