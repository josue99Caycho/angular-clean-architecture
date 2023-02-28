import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userImplementation } from '../data/implementation/user.implementation';
import { UserRepository } from './repository/user/user.repository';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: UserRepository, useClass: userImplementation
    }
  ]
})
export class DomainModule { }
