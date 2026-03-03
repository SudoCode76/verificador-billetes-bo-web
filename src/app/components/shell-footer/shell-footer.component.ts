import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SocialLink } from '../../models/social-link.model';

export type { SocialLink };

@Component({
  selector: 'app-shell-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
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
