import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-install-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <main class="w-full max-w-5xl mx-auto flex flex-col items-center pt-10 pb-20 px-6">
      <section class="w-full text-center mb-16 relative">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
        >
          <span class="material-symbols-outlined text-sm">download</span>
          Guía de Instalación
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Cómo instalar la aplicación
        </h1>
        <p class="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
          Sigue estos sencillos pasos para instalar el Verificador de Billetes BO en tu dispositivo
          Android de forma segura y rápida.
        </p>
      </section>

      <div class="w-full space-y-8">
        <!-- Step cards (1..4) condensed for brevity; same structure as provided mockup -->
        <div
          class="bg-acrylic dark:bg-surface-dark border border-gray-200/60 dark:border-gray-700 rounded-fluent-xl shadow-fluent overflow-hidden"
        >
          <div class="flex flex-col md:flex-row h-full">
            <div class="md:w-1/2 p-8 flex flex-col justify-center">
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
                >
                  1
                </div>
                <h2 class="text-2xl font-bold pt-2">Descarga el archivo APK</h2>
              </div>
              <p class="text-text-secondary dark:text-text-secondary-dark mb-6 pl-16">
                Haz clic en el botón de descarga para obtener la última versión del instalador (APK)
                directamente desde nuestro servidor seguro.
              </p>
              <div class="pl-16">
                <button
                  class="text-primary hover:text-primary-hover font-medium flex items-center gap-2 group"
                >
                  Iniciar descarga
                  <span
                    class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                    >arrow_forward</span
                  >
                </button>
              </div>
            </div>
            <div
              class="md:w-1/2 bg-blue-50/50 dark:bg-blue-900/10 flex items-end justify-center pt-8 px-8 border-t md:border-t-0 md:border-l border-gray-200/50 dark:border-gray-700"
            >
              <div
                class="w-48 h-64 bg-white dark:bg-gray-800 rounded-t-3xl border-t-8 border-x-8 border-gray-900 shadow-xl relative overflow-hidden"
              >
                <div
                  class="w-full h-full bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center p-4"
                >
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-primary"
                  >
                    <span class="material-symbols-outlined">download</span>
                  </div>
                  <div class="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div class="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full mt-12 bg-acrylic dark:bg-surface-dark border-l-4 border-yellow-400 p-6 rounded-r-fluent-lg shadow-sm flex items-start gap-4"
      >
        <div class="text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-full">
          <span class="material-symbols-outlined">lightbulb</span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-1">Nota Importante</h3>
          <p class="text-sm text-text-secondary dark:text-text-secondary-dark">
            Es posible que Google Play Protect muestre una advertencia al instalar. Esto es normal
            para aplicaciones fuera de la tienda. Simplemente selecciona "Instalar de todas formas"
            para continuar.
          </p>
        </div>
      </div>

      <div class="w-full py-16 text-center mt-8">
        <h2 class="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
        <button
          class="bg-primary hover:bg-primary-hover text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
        >
          <span class="material-symbols-outlined">android</span>
          Descargar APK ahora
        </button>
        <p class="mt-4 text-sm text-text-secondary dark:text-text-secondary-dark">
          Versión 2.4.0 • Actualizado Oct 2023 • 15 MB
        </p>
      </div>
    </main>
  `,
  styles: [],
})
export class InstallPage {}
