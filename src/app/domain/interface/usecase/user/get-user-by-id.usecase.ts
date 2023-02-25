import { UserModelResponse } from '../../../models/user.model';

export interface UserGetByIdUseCase {
  execute(id: string): Promise<UserModelResponse>;
}