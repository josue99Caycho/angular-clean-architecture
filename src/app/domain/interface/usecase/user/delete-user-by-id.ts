export interface UserDeleteyIdUseCase {
  execute(user: string): Promise<any>;
}