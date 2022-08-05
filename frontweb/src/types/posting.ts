import { ShortClient } from "./shortClient";
import { ShortEmployee } from "./shortEmployee";
import { ShortProvider } from "./shortProvider";

export type Posting = {
    id: number;
    date: string;
    unit: string;
    quantity: number;
    price: number;
    total: string;
    note: string;
    salaryAdvance: boolean;
    resolved: boolean;
    employee: ShortEmployee;
    client: ShortClient;
    provider: ShortProvider;
}