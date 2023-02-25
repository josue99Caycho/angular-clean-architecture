export interface UserModelResponse {
  id?: string;
  name: string;
  age?: number;
  email: string;
  lastName: string;
  status?: boolean;
  phone?: string;
  dni?: string;
}

export interface UserModelRequest {
  name: string;
  age?: number;
  email: string;
  lastName: string;
  phone?: string;
  dni?: string;
}