import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SocialLink } from '../../models/social-link.model';

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

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage {
  readonly heroImage = 'assets/images/screenshots/presentation.png';

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
    { label: 'GitHub', href: 'https://github.com/SudoCode76?tab=repositories', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/miguel-zenteno/', icon: 'linkedin' },
    { label: 'WhatsApp', href: 'https://wa.me/59162994685', icon: 'whatsapp' },
  ];

  private readonly screenshotIndex = signal(0);
  private readonly visibleCount = 3;

  readonly visibleScreenshots = computed<Screenshot[]>(() => {
    const total = this.screenshots.length;
    return Array.from(
      { length: this.visibleCount },
      (_, i) => this.screenshots[(this.screenshotIndex() + i) % total],
    );
  });

  prevScreenshot(): void {
    this.screenshotIndex.update((i) => (i - 1 + this.screenshots.length) % this.screenshots.length);
  }

  nextScreenshot(): void {
    this.screenshotIndex.update((i) => (i + 1) % this.screenshots.length);
  }

  descargarApk(): void {
    window.open(
      'https://github.com/SudoCode76/Verificador-de-Billetes-BO/releases/download/v1.0.0/Verificador.de.Billetes.BO.apk',
      '_blank',
    );
  }
}
