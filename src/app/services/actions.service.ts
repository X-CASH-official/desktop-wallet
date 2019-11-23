import { Injectable } from '@angular/core';
import { WalletListService } from './wallet-list.service';
import { RpcCallsService } from './rpc-calls.service';
import { ContactListService } from './contact-list.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This service is used by the components to perform an action
 * It tries to do a RPC call and then mirror the result of the action 
 * on the wallet local models via WalletListService and ContactListService.
 */
export class ActionsService {
  
  constructor(private rpcCallsService: RpcCallsService, 
    private walletListService: WalletListService,
    private contactListService: ContactListService) { }
  
  /**
   * Rename a wallet.
   * @param walletId id of the wallet to rename
   * @param newName new name of the wallet to rename
   */
  public renameWallet(walletId: number, newName: string): void {
    // RPC CALL PROMISE, on success then ->
    this.walletListService.renameWallet(walletId, newName);
  }
  
  /**
   * Remove a wallet.
   * Remove information from the wallet models and keeps the wallet files
   * @param walletId id of the wallet to remove
   */
  public removeWallet(walletId: number): void {
    this.walletListService.removeWallet(walletId);
  }
  
  /**
   * Create a wallet.
   * @param name label of the wallet to create
   * @param password password of the wallet to create
   */
  public createWallet(name: string, password: string): void {
    this.rpcCallsService.createWallet({args: 'toCreateWallet'})
      .then((res) => {
        this.walletListService.addWallet(name, 'ok', 12);
      })
      .catch((err) => {
        console.error('error');
      });
  }
  
  /**
   * Import a wallet.
   * @param name name of the wallet to import
   * @param password password of the wallet to import
   */
  public importWallet(name: string, password: string) { 
    // RPC CALL PROMISE, on success then ->
    const balanceReturnedByRPCCall = 12;
    this.walletListService.addWallet(name, 'keyProvidedByRPCWalletCreation', balanceReturnedByRPCCall);
  }

  /**
   * Add a contact to the address book.
   * @param name name of the contact to add
   * @param address address of the contact to add
   */
  public addContact(name: string, address: string) {
    // RPC CALL PROMISE, on success then ->
    this.contactListService.addContact(name, address);
  }

  /**
   * Remove a contact from the address book.
   * @param id id of the contact to remove
   */
  public removeContact(id: number) {
    // RPC CALL PROMISE, on success then ->
    this.contactListService.removeContact(id);
  }

  /**
   * Modify a contact in the address book.
   * @param id id of the contact to modify
   * @param newName new name of the contact to modify
   * @param newAddress new address of the contact to modify
   */
  public modifyContact(id: number, newName?: string, newAddress?: string) {
    // RPC CALL PROMISE, on success then ->
    this.contactListService.modifyContact(id, newName, newAddress);
  }
}
