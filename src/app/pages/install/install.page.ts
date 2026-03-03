import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-install-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <main class="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center">
      <section class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 install-hero-title">
          Cómo instalar Verificador BO en Android
        </h1>
        <p class="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
          Instala la aplicación gratuita en minutos, sin necesidad de crear una cuenta. Sigue los
          pasos y tendrás Verificador BO listo para usar.
        </p>
      </section>

      <section class="w-full space-y-6">
        <div
          class="panel bg-acrylic dark:bg-surface-dark p-6 md:p-8 rounded-fluent-lg shadow-fluent flex flex-col md:flex-row gap-6 md:items-center group hover:shadow-fluent-hover transition-all"
        >
          <div class="flex-shrink-0">
            <span class="text-6xl font-black text-primary/80 select-none">1</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">Descarga el archivo APK</h3>
            <p class="text-text-secondary dark:text-text-secondary-dark">
              Presiona el botón de descarga para obtener la última versión de la aplicación
              directamente en tu dispositivo. El archivo es seguro y verificado.
            </p>
          </div>
          <div
            class="w-full md:w-48 h-32 placeholder-card rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-300"
          >
            <span class="material-symbols-outlined text-4xl">download_for_offline</span>
          </div>
        </div>

        <div
          class="panel bg-acrylic dark:bg-surface-dark p-6 md:p-8 rounded-fluent-lg shadow-fluent flex flex-col md:flex-row gap-6 md:items-center group hover:shadow-fluent-hover transition-all"
        >
          <div class="flex-shrink-0">
            <span class="text-6xl font-black text-primary/80 select-none">2</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">Permite la instalación de fuentes desconocidas</h3>
            <p class="text-text-secondary dark:text-text-secondary-dark">
              Si es la primera vez que instalas una app fuera de Play Store, tu navegador te pedirá
              permiso. Ve a
              <span class="font-semibold text-gray-800 dark:text-gray-200"
                >Ajustes &gt; Seguridad</span
              >
              y activa la opción.
            </p>
          </div>
          <div
            class="w-full md:w-48 h-32 placeholder-card rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-300"
          >
            <span class="material-symbols-outlined text-4xl">settings_applications</span>
          </div>
        </div>

        <div
          class="panel bg-acrylic dark:bg-surface-dark p-6 md:p-8 rounded-fluent-lg shadow-fluent flex flex-col md:flex-row gap-6 md:items-center group hover:shadow-fluent-hover transition-all"
        >
          <div class="flex-shrink-0">
            <span class="text-6xl font-black text-primary/80 select-none">3</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">Abre el archivo descargado</h3>
            <p class="text-text-secondary dark:text-text-secondary-dark">
              Una vez finalizada la descarga, toca la notificación o busca el archivo APK en tu
              carpeta de
              <span class="font-semibold text-gray-800 dark:text-gray-200">Descargas</span>.
            </p>
          </div>
          <div
            class="w-full md:w-48 h-32 placeholder-card rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-300"
          >
            <span class="material-symbols-outlined text-4xl">folder_open</span>
          </div>
        </div>

        <div
          class="panel bg-acrylic dark:bg-surface-dark p-6 md:p-8 rounded-fluent-lg shadow-fluent flex flex-col md:flex-row gap-6 md:items-center group hover:shadow-fluent-hover transition-all"
        >
          <div class="flex-shrink-0">
            <span class="text-6xl font-black text-primary/80 select-none">4</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">Instala y abre la aplicación</h3>
            <p class="text-text-secondary dark:text-text-secondary-dark">
              Confirma la instalación y espera unos segundos. ¡Listo! Ahora puedes abrir Verificador
              BO y empezar a escanear billetes.
            </p>
          </div>
          <div
            class="w-full md:w-48 h-32 placeholder-card rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-300"
          >
            <span class="material-symbols-outlined text-4xl">verified</span>
          </div>
        </div>

        <div class="note-warning mt-8 flex gap-4 items-start w-full">
          <div
            class="text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-transparent p-2 rounded-full"
          >
            <span class="material-symbols-outlined">warning</span>
          </div>
          <div>
            <h4 class="font-bold text-yellow-800 dark:text-yellow-400 mb-1">Nota Importante</h4>
            <p class="text-sm text-[--warning-text]">
              El proceso puede variar ligeramente según la marca y versión de tu dispositivo Android
              (Samsung, Xiaomi, Motorola, etc.). Si tienes problemas, revisa la configuración de
              seguridad de tu teléfono.
            </p>
          </div>
        </div>
      </section>

      <section class="mt-16 text-center">
        <h2 class="text-2xl font-bold mb-6">¿Listo para instalar?</h2>
        <button
          class="inline-flex items-center justify-center gap-3 cta-primary px-8 py-4 rounded-fluent-lg font-semibold transition-all transform hover:-translate-y-0.5 text-lg"
        >
          <span class="material-symbols-outlined">android</span>
          Descargar APK ahora
        </button>
      </section>
    </main>
  `,
  styles: [],
})
export class InstallPage {}
