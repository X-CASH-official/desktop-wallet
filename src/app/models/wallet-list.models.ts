export interface Wallet {
    id: number;
    name: string;
    publicKey: string;
    balance: number;
}

export class WalletList {
    private walletList: Wallet[]
    private walletNumber: number;

    constructor(initialWalletList: object[]) {
        this.walletList = [];
        this.walletNumber = 0;

        try {
            for (let i = 0; i < initialWalletList.length; i++) {
                this.addWallet(initialWalletList[i]['name'], initialWalletList[i]['publicKey'], initialWalletList[i]['balance'])
            }
        } catch (e) {
            throw new Error("Wrong input format for WalletList constructor");
        }
    }

    public addWallet(name: string, publicKey: string, balance: number): void {
        const newWallet: Wallet = {
            id: this.walletNumber,
            name: name,
            publicKey: publicKey,
            balance: balance
        }
        this.walletList.push(newWallet);
        this.walletNumber++;
    }

    public removeWallet(id: number) {
        if (id > this.walletNumber) {
            throw new Error("id exceed wallet list size");
        } else {
            this.walletList.splice(id, 1);
            this.walletNumber--;
            for (let i = id; i < this.walletNumber; i++) {
                this.walletList[i].id--;
            }
        }
    }

    public renameWallet(id: number, newName: string) {
        if (id > this.walletNumber) {
            throw new Error("id exceed wallet list size");
        } else {
            this.walletList[id].name = newName;
        }
    }

    public getWalletList(): Wallet[] {
        return this.walletList.map(x => Object.assign({}, x));
    }
}