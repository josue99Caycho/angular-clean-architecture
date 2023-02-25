import { UserModelRequest } from '../../../models/user.model';

export interface UserCreateUseCase {
  execute(user: UserModelRequest): Promise<any>;
}