import { Item } from './item.model';

export class Wallet extends Item {
    public name: string;
    public publicKey: string;
    public balance: number;

    constructor(id: number, name: string, publicKey: string, balance: number) {
        super(id);
        this.name = name;
        this.publicKey = publicKey;
        this.balance = balance;
    }
}