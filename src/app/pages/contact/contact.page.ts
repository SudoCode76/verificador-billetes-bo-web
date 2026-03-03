import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <main class="w-full max-w-2xl mx-auto flex flex-col items-center flex-grow pt-12 pb-20 px-6">
      <section class="text-center mb-10">
        <h1 class="text-4xl font-bold mb-3 tracking-tight install-hero-title">
          Contacta al desarrollador
        </h1>
        <p class="text-lg text-text-secondary dark:text-text-secondary-dark">
          ¿Dudas, sugerencias o encontraste un error? Escríbeme y recibirás respuesta en menos de 24
          horas.
        </p>
      </section>

      <div
        class="w-full bg-acrylic dark:bg-surface-dark/90 border border-gray-200/50 dark:border-gray-700 backdrop-blur-xl rounded-fluent-xl p-8 shadow-fluent flex flex-col items-center text-center animate-fade-in-up"
      >
        <div
          class="w-16 h-16 bg-[var(--whatsapp-light)] rounded-full flex items-center justify-center mb-6 shadow-sm"
        >
          <svg
            class="w-10 h-10 text-[var(--whatsapp)]"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
            ></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-3">Escríbeme por WhatsApp</h2>
        <p class="text-text-secondary dark:text-text-secondary-dark mb-8 max-w-md">
          La forma más rápida de contactarme. Respondo consultas sobre la aplicación, reportes de
          errores, sugerencias de mejora o solicitudes de desarrollo.
          <br />Miguel Zenteno · Keybusy Software
        </p>

        <a
          class="bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center"
          href="https://wa.me/59162994685"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.503 5.3L2.24 21.908l4.757-1.246a9.972 9.972 0 005.015 1.354h.004c5.505 0 9.99-4.479 9.99-9.985a9.966 9.966 0 00-2.933-7.07A9.957 9.957 0 0012.012 2z"
            ></path>
          </svg>
          Abrir WhatsApp
        </a>

        <p class="text-xs text-text-secondary-dark mt-4">
          Al hacer clic serás redirigido a WhatsApp — Miguel Zenteno, Keybusy Software
        </p>
      </div>

      <div
        class="w-full mt-6 bg-white/50 dark:bg-surface-dark/50 border border-gray-200/50 dark:border-gray-700 rounded-fluent-lg p-4 flex items-center justify-center gap-3 backdrop-blur-md"
      >
        <span class="material-symbols-outlined text-text-secondary dark:text-text-secondary-dark"
          >timer</span
        >
        <span class="text-sm font-medium text-text-secondary dark:text-text-secondary-dark"
          >Tiempo de respuesta habitual: dentro de 24 horas.</span
        >
      </div>
    </main>
  `,
  styles: [],
})
export class ContactPage {}
