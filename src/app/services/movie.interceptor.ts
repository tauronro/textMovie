import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    request = req.clone({
      setHeaders: {
        authorization: `Bearer ${environment.apiKey}`,
      },
    });

    return next.handle(request);
  }
}
