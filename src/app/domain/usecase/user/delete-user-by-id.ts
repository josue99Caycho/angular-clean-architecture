import { Injectable } from "@angular/core";
import { UserDeleteyIdUseCase } from "../../interface/usecase/user/delete-user-by-id";
import { UserRepository } from '../../repository/user/user.repository';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteById implements UserDeleteyIdUseCase {

  constructor(private userRepository: UserRepository) { }

  async execute(userId: string): Promise<any> {
    return await this.userRepository.deleteUserById(userId)
  }
}