export interface User {
  id: number;
  login: string;
  isAdmin: boolean;
}

export interface UserResponse {
  user: User;
}
