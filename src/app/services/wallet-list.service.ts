import { Injectable } from '@angular/core';
import { WalletList, Wallet } from '../models/wallet-list.models';
import { FAKE_WALLET_LIST } from 'src/fake-data/fake-wallet-list';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletListService {

  private walletList: WalletList;
  private observableList: BehaviorSubject<Wallet[]>;

  constructor() {
    this.walletList = new WalletList(FAKE_WALLET_LIST);
    this.observableList = new BehaviorSubject<Wallet[]>(this.walletList.getWalletList());
  }

  public getWalletList(): BehaviorSubject<Wallet[]> {
    return this.observableList;
  }

  public addWallet(): void {
    this.walletList.addWallet('pizza', 'XCA12dzq2123123', 12938494);
  }

  public removeWallet(walletId: number): void {
    this.walletList.removeWallet(walletId);
  }

  public renameWallet(walletId: number, newName: string): void {
    this.walletList.renameWallet(walletId, newName);
  }

}
