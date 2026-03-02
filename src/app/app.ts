import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ShellFooterComponent } from './components/shell-footer/shell-footer.component';
import { ShellNavComponent } from './components/shell-nav/shell-nav.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

interface InstallStep {
  label: string;
  detail: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, ShellNavComponent, ShellFooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Caracteristicas', href: '#features' },
    { label: 'Capturas', href: '#screenshots' },
    { label: 'Como instalar', href: '#install' },
    { label: 'Contacto', href: '#developer' },
  ];

  readonly features: Feature[] = [
    {
      icon: 'qr_code_scanner',
      title: 'Identificacion Rapida',
      description:
        'Escanee y verifique billetes en segundos utilizando la camara de su dispositivo con alta precision.',
    },
    {
      icon: 'database',
      title: 'Datos Oficiales del BCB',
      description:
        'La informacion esta basada en los rangos de series publicados oficialmente por el Banco Central de Bolivia y se actualiza cuando el BCB publica nuevos comunicados.',
    },
    {
      icon: 'design_services',
      title: 'Diseno Nativo Android',
      description:
        'Interfaz que sigue los lineamientos de Material Design para ofrecer una experiencia fluida, familiar y comoda.',
    },
  ];

  readonly screenshots: Screenshot[] = [
    {
      src: 'assets/images/screenshots/screenshot-01-home.png',
      alt: 'Pantalla principal con el escaner activo',
    },
    {
      src: 'assets/images/screenshots/screenshot-02-results-valid.png',
      alt: 'Resultado de verificacion exitosa',
    },
    {
      src: 'assets/images/screenshots/screenshot-02-results-invalid.png',
      alt: 'Resultado mostrando billete invalido',
    },
  ];

  readonly installSteps: InstallStep[] = [
    {
      label: 'Descargue el APK',
      detail:
        'Descargue la ultima version cifrada desde Keybusy Software y permita instalaciones externas cuando el sistema lo solicite.',
    },
    {
      label: 'Otorgue permisos',
      detail:
        'Active el acceso a la camara y el almacenamiento para que la app pueda escanear y guardar comprobantes locales.',
    },
    {
      label: 'Verifique billetes',
      detail:
        'Enfoca el billete, deja que la app analice la serie y revisa los indicadores de autenticidad con un solo toque.',
    },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: '#', icon: 'code' },
    { label: 'LinkedIn', href: '#', icon: 'work' },
    { label: 'WhatsApp', href: '#', icon: 'chat' },
  ];
}
