import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Todos' },
    { value: 'pizza-1', viewValue: 'Activo' },
    { value: 'tacos-2', viewValue: 'Inactivo' },
  ];
}
