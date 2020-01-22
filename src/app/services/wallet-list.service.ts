import { Injectable } from '@angular/core';
import { WalletList } from '../models/wallet-list.model';
import { BehaviorSubject } from 'rxjs';
import { Wallet } from '../models/wallet.model';
import { DatabaseService } from 'src/app/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class WalletListService {

  private walletList: WalletList;
  private walletList$: BehaviorSubject<Wallet[]>;

  constructor(private DatabaseService: DatabaseService) {
    this.loadWallets();
  }

  async loadWallets()
  {
    let data = await this.DatabaseService.getWalletData();
    try
    {
      this.walletList = new WalletList(data);
      this.walletList$ = new BehaviorSubject<Wallet[]>(this.walletList.getList());
    }
    catch (error)
    {

    }
  }

  private update() {
    this.walletList$.next(this.walletList.getList());
  }

  /**
   * Get the wallet list.
   * @return a `BehaviorSubject<Wallet[]>` of the wallet list
   */
  public getWalletList(): BehaviorSubject<Wallet[]> {
    return this.walletList$;
  }

  /**
   * Add a wallet to the list. Don't use this method outside of ActionsService.
   * @param name label of the wallet to add 
   * @param publicKey public address of the wallet to add
   * @param balance balance of the wallet to add
   */
  public addWallet(name: string, publicKey: string, balance: number): void {
    this.walletList.addWallet(name, publicKey, balance);
    this.update();
  }

  /**
   * Remove a wallet from the list. Don't use this method outisde of ActionsService.
   * @param walletId id of the wallet to remove
   */
  public removeWallet(walletId: number): void {
    this.walletList.removeElement(walletId);
    this.update();
  }

  /**
   * Rename a wallet in the list. Don't use this method outside of ActionsService.
   * @param walletId id of the wallet to rename
   * @param newName new name of the wallet to rename
   */
  public renameWallet(walletId: number, newName: string): void {
    this.walletList.renameWallet(walletId, newName);
    this.update();
  }

}
