import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorCustomIntl } from './material/mat-paginator-custom-intl';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, HttpClientModule, RouterLink, RouterLinkActive],
  exports: [HeaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorCustomIntl,
    },
  ],
})
export class CoreModule {}
