import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CoreModule } from './app/core/core.module';
import { SharedModule } from './app/shared/shared.module';
import { APOLLO_CLIENT_PROVIDER } from './app/core/apollo-client-provider';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      APOLLO_CLIENT_PROVIDER, // ✅ Proveedor de Apollo
      // ❌ Elimina estos proveedores (no son necesarios aquí):
      // { provide: CoreModule, useClass: CoreModule },
      // { provide: SharedModule, useClass: SharedModule },
      importProvidersFrom(
        // Si CoreModule/SharedModule tienen providers necesarios, impórtalos aquí
        CoreModule,
        SharedModule
      )
    ]
  }).catch(err => console.error(err));