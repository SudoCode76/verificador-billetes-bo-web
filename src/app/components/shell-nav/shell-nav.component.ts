import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-shell-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './shell-nav.component.html',
  styleUrls: ['./shell-nav.component.css'],
})
export class ShellNavComponent {
  @Input({ required: true })
  links!: NavLink[];

  @Input()
  brandName = 'Verificador BO';

  @Input()
  ctaLabel = 'Descargar';

  @Input()
  ctaHref = '#inicio';

  private readonly _menuOpen = signal(false);

  readonly menuOpen = this._menuOpen.asReadonly();

  toggleMenu() {
    this._menuOpen.update((state) => !state);
  }

  closeMenu() {
    this._menuOpen.set(false);
  }
}
