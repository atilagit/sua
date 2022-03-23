import { Client } from "./client";
import { Employee } from "./employee";
import { Provider } from "./provider";

export type Posting = {
    id: number;
    date: string;
    unit: string;
    quantity: number;
    price: number;
    note: string;
    salaryAdvance: boolean;
    resolved: boolean;
    employee: Employee;
    client: Client;
    provider: Provider;
}