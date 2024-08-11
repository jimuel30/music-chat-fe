export interface RegisterRequest {
  userName: string;       // Removed 'private' keyword as it's not used in TypeScript interfaces
  firstName: string;
  middleName?: string;    // Marked as optional with '?'
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;         // Assuming 'Gender' is another interface or enum defined elsewhere
  birthDate: Date;
}

