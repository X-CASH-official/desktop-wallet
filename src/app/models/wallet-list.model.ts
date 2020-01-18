import { List } from './list.model';
import { Wallet } from './wallet.model';

export class WalletList extends List<Wallet> {

    constructor(initialWalletList: Wallet[]) {
        super(initialWalletList);
    }

    public addWallet(name: string, publicKey: string, balance: number) {
        const newWallet: Wallet = new Wallet(this.getElementIndex(), name, publicKey, balance);
        this.addElement(newWallet);
    }

    public renameWallet(id: number, newName: string) {
        if (id >= this.getElementIndex()) {
            throw new Error("id exceed wallet list size");
        } else {
            this.elementList[id].name = newName;
        }
    }
}