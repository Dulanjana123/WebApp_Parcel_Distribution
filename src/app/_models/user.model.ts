export interface IUser {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    roles: string[];
    token: string;
}

export class User implements IUser {
    username!: string;
    email!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    phoneNumber!: string;
    roles!: string[];
    token!: string;
}