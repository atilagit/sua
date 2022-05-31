import { Address } from "./address";
import { Roles } from "./roles";

export type Employee = {
    id: number,
    name: string,
    abbreviatedName: string;
    cpf: string,
    admissionDate: string,
    login: string,
    active: boolean,
    address: Address,
    roles: [
        Roles,
        Roles,
        Roles
    ]
}