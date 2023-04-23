// Auth START ==========================================================================================
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface Redirect {
  redirectTo: 'login' | 'register' | undefined;
  error: 'user_authorized' | 'user_registered' | undefined;
  success: 'authorized' | 'registered' | undefined;
}
// Auth END ============================================================================================
export interface HistoryOperations {
  src: string;
  dataStart: Date;
  dataEnd: Date;
  title: string;
  description: string;
  city: string;
  region: string;
  cost: number;
}
