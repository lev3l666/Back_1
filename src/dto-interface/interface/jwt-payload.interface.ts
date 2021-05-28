export interface IJWTPayload {
  id: number;
  username: string;
  email: string;
  role: any;
  iat?: Date;
}
