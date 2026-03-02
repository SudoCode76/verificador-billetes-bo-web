import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-shell-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './shell-footer.component.html',
  styleUrls: ['./shell-footer.component.css'],
})
export class ShellFooterComponent {
  @Input()
  brandName = 'Verificador de Billetes BO';

  @Input()
  description = '© 2026 Keybusy Software. Todos los derechos reservados.';

  @Input()
  socialLinks: SocialLink[] = [];
}
