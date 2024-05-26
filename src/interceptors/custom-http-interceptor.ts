import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, finalize, Observable, throwError} from "rxjs";
@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   loader on
    this.setLoader(true)
    return next.handle(req).
      pipe(
        catchError((err:any)=>{
          return this.handleError(err)
        }),
      finalize(()=>{
      // loader off
        this.setLoader(false);
        return next.handle(req)
      })
    )
  }

  private setLoader(status: boolean):void {
    console.log("set loader status",status)
  }

  private handleError(err: HttpErrorResponse) {
    const status:number = err.status;
    switch (status) {
      case 404:
        console.log("API Not Found");
        break;
    }
    return throwError(err)
  }
}
