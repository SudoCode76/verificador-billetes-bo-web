import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly _theme = signal<Theme>(this.resolveInitialTheme());

  /** Read-only signal with the current active theme. */
  readonly theme = this._theme.asReadonly();

  /** Toggle between light and dark. Does NOT persist across page reloads. */
  toggle(): void {
    this._theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    this.applyTheme(this._theme());
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  private resolveInitialTheme(): Theme {
    const win = this.document.defaultView;
    const prefersDark =
      typeof win?.matchMedia === 'function'
        ? win.matchMedia('(prefers-color-scheme: dark)').matches
        : false;
    const initial: Theme = prefersDark ? 'dark' : 'light';
    // Apply immediately so there is no flash of wrong theme on first render.
    this.applyTheme(initial);
    return initial;
  }

  private applyTheme(theme: Theme): void {
    const root = this.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
