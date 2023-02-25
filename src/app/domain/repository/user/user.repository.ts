import { UserModelRequest, UserModelResponse } from '../../models/user.model';

export abstract class UserRepository {

  abstract getAllUsers(): Promise<UserModelResponse[]>;
  abstract getUserById(id: string): Promise<UserModelResponse>;
  abstract getUserByValue(value: string): Promise<UserModelResponse[]>;
  abstract createUser(user: UserModelRequest): Promise<any>;
  abstract updateUser(user: UserModelRequest): Promise<any>;
  abstract deleteUserById(id: string): Promise<any>;
  
}