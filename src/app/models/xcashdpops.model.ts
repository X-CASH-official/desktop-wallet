import { Item } from './item.model';

export class Xcashdpops extends Item {
    public name: string;
    public address: string;

    constructor(id: number, name: string, address: string) {
        super(id);
        this.name = name;
        this.address = address;
    }
} 
