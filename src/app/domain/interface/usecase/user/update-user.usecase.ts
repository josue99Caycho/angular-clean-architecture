import { UserModelRequest } from '../../../models/user.model';

export interface UserUpdateUseCase {
  execute(user: UserModelRequest): Promise<any>;
}