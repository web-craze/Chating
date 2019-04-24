import{ Injectable } from '@angular/core';
import{ HttpEvent, HttpRequest, HttpInterceptor,  HttpHandler } from '@angular/common/http';
import{ Observable } from 'rxjs/observable';
  @Injectable()
  export class GithubAuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
const authReq =req.clone({
  headers: req.headers.set('Authorization','token 8b70006a112ae805142a8950c3263fe7a73d523a')
});
      return next.handle(authReq);
    }



  }
