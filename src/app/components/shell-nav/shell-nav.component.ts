import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

export interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-shell-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './shell-nav.component.html',
  styleUrls: ['./shell-nav.component.css'],
})
export class ShellNavComponent {
  @Input({ required: true }) links!: NavLink[];
  @Input() brandName = 'Verificador BO';
  @Input() ctaLabel = 'Descargar';
  @Input() ctaHref = '#inicio';

  private readonly themeService = inject(ThemeService);

  /** Current active theme — used by the template to render the correct icon. */
  readonly theme = this.themeService.theme;

  private readonly _menuOpen = signal(false);
  readonly menuOpen = this._menuOpen.asReadonly();

  toggleMenu(): void {
    this._menuOpen.update((state) => !state);
  }

  closeMenu(): void {
    this._menuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
