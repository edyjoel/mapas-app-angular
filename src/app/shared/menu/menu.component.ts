import { Component } from '@angular/core';

interface MenuItem {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      nombre: 'FullScreen',
      ruta: '/mapas/fullscreen',
    },
    {
      nombre: 'ZoomRange',
      ruta: '/mapas/zoom-range',
    },
    {
      nombre: 'Marcadores',
      ruta: '/mapas/marcadores',
    },
    {
      nombre: 'Propiedades',
      ruta: '/mapas/propiedades',
    },
  ];
}
