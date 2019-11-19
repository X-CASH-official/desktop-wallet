import { Injectable } from '@angular/core';
import { WalletList } from '../models/wallet-list.model';
import { FAKE_WALLET_LIST } from 'src/fake-data/fake-wallet-list';
import { BehaviorSubject } from 'rxjs';
import { Wallet } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletListService {

  private walletList: WalletList;
  private walletList$: BehaviorSubject<Wallet[]>;

  constructor() {
    try {
      this.walletList = new WalletList(FAKE_WALLET_LIST);
      this.walletList$ = new BehaviorSubject<Wallet[]>(this.walletList.getList());
    } catch (e) {
      console.error('Wallet list initilization failed', e);
    }
  }

  private update() {
    this.walletList$.next(this.walletList.getList());
  }

  public getWalletList(): BehaviorSubject<Wallet[]> {
    return this.walletList$;
  }

  public addWallet(): void {
    this.walletList.addWallet('pizza', 'XCA12dzq2123123', 12938494);
    this.update();
  }

  public removeWallet(walletId: number): void {
    this.walletList.removeElement(walletId);
    this.update();
  }

  public renameWallet(walletId: number, newName: string): void {
    this.walletList.renameWallet(walletId, newName);
    this.update();
  }

}
