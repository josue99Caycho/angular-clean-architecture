import { Injectable } from "@angular/core";
import { UserGetByValueUseCase } from "../../interface/usecase/user/get-user-by-value.usecase";
import { UserModelResponse } from "../../models/user.model";
import { UserRepository } from '../../repository/user/user.repository';

@Injectable({
  providedIn: 'root'
})
export class UserGetByValue implements UserGetByValueUseCase {

  constructor(private userRepository: UserRepository) { }

  async execute(value: string): Promise<UserModelResponse[]> {
    return await this.userRepository.getUserByValue(value);
  }
}