import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() opened: boolean = false;
  @Output() isOpenedResponse: boolean = false;

  constructor() {}

  onOpened(): void {
    const isOpened = this.onOpened;
    this.isOpenedResponse = !isOpened;
  }

}
