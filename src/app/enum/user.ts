/**
 * @author dee
 */
export type Role = 'ADMIN' | 'CLIENT' ;
export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    role: Role;
}
