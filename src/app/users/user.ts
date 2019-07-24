export interface User {
    id: number;
    name: string;
    phone?: string;
    username?: string;
    address?: Address;
    uname?:string;
}

export interface Address {
    city: string;
}