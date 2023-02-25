import { UserGetByIdUseCase } from '../../interface/usecase/user/get-user-by-id.usecase';
import { UserModelResponse } from '../../models/user.model';
import { UserRepository } from '../../repository/user/user.repository';


export class UserById implements UserGetByIdUseCase {

  constructor(private userRepository: UserRepository) { }

  async execute(id: string): Promise<UserModelResponse> {
    return await this.userRepository.getUserById(id);
  }
}