import { UserModelResponse } from '../../../models/user.model';

export interface UserGetByValueUseCase {
  execute(value: string): Promise<UserModelResponse[]>;
}