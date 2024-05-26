import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../interceptors/token-interceptor";
import {ResponseFormatInterceptor} from "../interceptors/response-format-interceptor";
import {CustomHttpInterceptor} from "../interceptors/custom-http-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:TokenInterceptor,
    //   multi: true
    // },
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:ResponseFormatInterceptor,
    //   multi: true
    // },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomHttpInterceptor,
      multi: true
    }
    ],
};
