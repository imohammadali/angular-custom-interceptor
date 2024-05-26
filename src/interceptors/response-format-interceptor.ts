import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";


@Injectable()
export class ResponseFormatInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map((ev)=>{
          if (ev instanceof HttpResponse) {
            if(ev.body && ev.body.data){
              ev = ev.clone({body:ev.body.data})
            }
          }
          return ev;
        })
      )
  }

}
