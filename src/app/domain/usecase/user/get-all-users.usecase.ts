import { UserGetAllUseCase } from "../../interface/usecase/user/get-all-users.usecase";
import { UserRepository } from '../../repository/user/user.repository';
import { UserModelResponse } from '../../models/user.model';


export class UserGettAll implements UserGetAllUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<UserModelResponse[]> {
    return await this.userRepository.getAllUsers(); 
  }
}