import { Address } from "./address";

export type Provider = {
    id: number;
    name: string;
    corporateName: string;
    cpf: string;
    cnpj: string;
    active: boolean;
    address: Address;
}