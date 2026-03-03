import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellFooterComponent } from './components/shell-footer/shell-footer.component';
import { ShellNavComponent } from './components/shell-nav/shell-nav.component';
import { SocialLink } from './models/social-link.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShellNavComponent, ShellFooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Caracteristicas', href: '#features' },
    { label: 'Capturas', href: '#screenshots' },
    { label: 'Como instalar', href: '/install' },
    { label: 'Contacto', href: '/contact' },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/SudoCode76?tab=repositories', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/miguel-zenteno/', icon: 'linkedin' },
    { label: 'WhatsApp', href: 'https://wa.me/59162994685', icon: 'whatsapp' },
  ];
}
