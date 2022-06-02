import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from '../core/interceptors/header.interceptor';

export const appInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
];