import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Material
 */
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatIconModule } from '@angular/material/icon';
 import { MatCardModule } from '@angular/material/card';
 import { MatButtonModule } from '@angular/material/button';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
 import { MatSliderModule } from '@angular/material/slider';

 const components = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule
 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: [
    components
  ]
})
export class MaterialModule { }
