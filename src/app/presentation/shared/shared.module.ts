import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/components/sidebar.component';
import { SidebarModule } from './components/sidebar/sidebar.module';

const components = [
  MenuComponent,
  SidebarComponent,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedRoutingModule,
    SidebarModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
