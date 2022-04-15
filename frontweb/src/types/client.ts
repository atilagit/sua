import { Address } from "./address";

export type Client = {
    id: number;
    contact: string;
    corporateName: string;
    cpf: string;
    cnpj: string;
    active: boolean;
    address: Address;
}