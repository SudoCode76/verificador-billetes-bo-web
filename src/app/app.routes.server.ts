import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'install', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server },
];
