import { UserUpdateUseCase } from "../../interface/usecase/user/update-user.usecase";
import { UserModelRequest } from "../../models/user.model";
import { UserRepository } from '../../repository/user/user.repository';


export class UserUpdate implements UserUpdateUseCase {

  constructor(private userRepository: UserRepository) { }

  async execute(user: UserModelRequest): Promise<any> {
    return await this.userRepository.updateUser(user)
  }
}