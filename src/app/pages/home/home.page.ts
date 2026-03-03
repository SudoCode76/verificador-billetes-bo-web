import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
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
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Verificador de Billetes BO — Detecta billetes fuera de circulación');
    this.meta.updateTag({
      name: 'description',
      content:
        'Detecta billetes fuera de circulación en segundos escaneando la serie con la cámara de tu celular, usando datos oficiales del Banco Central de Bolivia.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'Verificador de Billetes BO' });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Detecta billetes fuera de circulación en segundos — app gratuita basada en datos oficiales del Banco Central de Bolivia.',
    });
  }
  readonly heroImage = 'assets/images/screenshots/presentation.png';

  readonly features: Feature[] = [
    {
      icon: 'qr_code_scanner',
      title: 'Identificación rápida',
      description:
        'Escanea y verifica billetes en segundos usando la cámara de tu dispositivo con alta precisión.',
    },
    {
      icon: 'database',
      title: 'Datos Oficiales del BCB',
      description:
        'La información se basa en los rangos de series publicados oficialmente por el Banco Central de Bolivia y se actualiza con cada comunicado oficial.',
    },
    {
      icon: 'design_services',
      title: 'Diseño nativo Android',
      description:
        'Interfaz que sigue los lineamientos de Material Design para ofrecer una experiencia fluida, familiar y cómoda.',
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
        'Descarga la última versión segura desde Keybusy Software. Si tu dispositivo solicita permiso, permite instalaciones desde fuentes desconocidas.',
    },
    {
      label: 'Otorgue permisos',
      detail:
        'Activa el acceso a la cámara y el almacenamiento para que la app pueda escanear y guardar comprobantes.',
    },
    {
      label: 'Verifique billetes',
      detail:
        'Enfoca el billete, la app analizará la serie y mostrará los indicadores de autenticidad en pantalla.',
    },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/SudoCode76', icon: 'github' },
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
