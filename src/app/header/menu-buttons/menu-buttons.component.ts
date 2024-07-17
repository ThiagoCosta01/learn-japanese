import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrl: './menu-buttons.component.scss'
})
export class MenuButtonsComponent {
  @Input() buttonText: string = 'Menu';
}
