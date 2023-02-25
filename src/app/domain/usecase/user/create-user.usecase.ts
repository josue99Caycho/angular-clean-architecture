import { UserRepository } from '../../repository/user/user.repository';
import { UserCreateUseCase } from '../../interface/usecase/user/create-user.usecase';
import { UserModelRequest } from '../../models/user.model';

export class UserCreate implements UserCreateUseCase {

  constructor(
    private userRepository: UserRepository
  ) { }

  async execute(user: UserModelRequest): Promise<any> {
    return await this.userRepository.createUser(user);
  }
}