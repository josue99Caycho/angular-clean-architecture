import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { UserModelRequest, UserModelResponse } from 'src/app/domain/models/user.model';
import { UserRepository } from '../../domain/repository/user/user.repository';

import { environment } from '../../../environments/environment';

export class userImplementation implements UserRepository {

  private URL = environment.user;

  constructor(private http: HttpClient) {}

  async getAllUsers(): Promise<UserModelResponse[]> {
    return lastValueFrom(this.http.get<UserModelResponse[]>(this.URL));
  }

  async getUserById(id: string): Promise<UserModelResponse> {
    return lastValueFrom(this.http.get<UserModelResponse>(`${this.URL}/${id}`));
  }

  async getUserByValue(value: string): Promise<UserModelResponse[]> {
    return lastValueFrom(this.http.get<UserModelResponse[]>(`${this.URL}?term=${value}`));
  }

  async createUser(user: UserModelRequest): Promise<any> {
    return lastValueFrom(this.http.post<any>(this.URL, user))
  }

  async updateUser(user: UserModelRequest): Promise<any> {
    return lastValueFrom(this.http.put<any>(this.URL, user));
  }

  async deleteUserById(id: string): Promise<any> {
    return this.http.delete<any>(`${this.URL}/${id}`);
  }
}