import { UserModelResponse } from '../../../models/user.model';
export interface UserGetAllUseCase {
  execute(): Promise<UserModelResponse[]>;
}