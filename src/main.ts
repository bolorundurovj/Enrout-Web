// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';
// import { JwtInterceptor, ServerErrorInterceptor } from './app/lib/interceptors';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(RouterModule.forRoot(routes), HttpClientModule),
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: ServerErrorInterceptor,
//       multi: true,
//     },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: JwtInterceptor,
//       multi: true,
//     },
//   ],
// }).catch((error) => console.error(error));
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
