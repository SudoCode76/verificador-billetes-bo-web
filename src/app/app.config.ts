import { ApplicationConfig, Injectable, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/**
 * Simple TitleStrategy that uses the `title` field from route data when present.
 * This ensures server-side rendered pages have proper titles per route.
 */
@Injectable()
class RouteTitleStrategy extends TitleStrategy {
  updateTitle(routerState: any) {
    const title = this.buildTitle(routerState);
    if (title) {
      // Use platform-safe title update for SSR and client
      try {
        document.title = title as string;
      } catch {
        // noop in non-browser environments
      }
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: TitleStrategy, useClass: RouteTitleStrategy },
  ],
};
