import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NAVIGATION_ITEMS = [
  {
    id: 'wallet_functions',
    title: 'Wallet Functions',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-home',
        children: [          
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/basic_wallet_functions/dashboard'
          },
          {
            id: 'send',
            title: 'Send',
            type: 'item',
            url: '/basic_wallet_functions/send'
          },
          {
            id: 'view_public_address',
            title: 'View Public Address',
            type: 'item',
            url: '/basic_wallet_functions/view_public_address'
          },
          {
            id: 'view_private_keys',
            title: 'View Private Keys',
            type: 'item',
            url: '/basic_wallet_functions/view_private_keys'
          },
          {
            id: 'address_book',
            title: 'Address Book',
            type: 'item',
            url: '/basic_wallet_functions/address_book'
          }        
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced',
        type: 'collapse',
        icon: 'feather icon-home',
        children: [  
          {
            id: 'change_password',
            title: 'Change Password',
            type: 'item',
            url: '/advanced_wallet_functions/change_password'
          },  
          {
            id: 'rescan_blockchain',
            title: 'Rescan Blockchain',
            type: 'item',
            url: '/advanced_wallet_functions/rescan_blockchain'
          },       
          {
            id: 'create_integrated_address',
            title: 'Create Integrated Address',
            type: 'item',
            url: '/advanced_wallet_functions/create_integrated_address'
          },
          {
            id: 'create_sub_address',
            title: 'Create Sub Address',
            type: 'item',
            url: '/advanced_wallet_functions/create_sub_address'
          },
          {
            id: 'get_tx_private_key',
            title: 'Get Transaction Private Key',
            type: 'item',
            url: '/advanced_wallet_functions/get_tx_private_key'
          },
          {
            id: 'verify_tx_private_key',
            title: 'Verify Transaction Private Key',
            type: 'item',
            url: '/advanced_wallet_functions/verify_tx_private_key'
          },
          {
            id: 'create_reserve_proof',
            title: 'Create Reserve Proof',
            type: 'item',
            url: '/advanced_wallet_functions/create_reserve_proof'
          },
          {
            id: 'verify_reserve_proof',
            title: 'Verify Reserve Proof',
            type: 'item',
            url: '/advanced_wallet_functions/verify_reserve_proof'
          },  
          {
            id: 'sign_data',
            title: 'Sign Data',
            type: 'item',
            url: '/advanced_wallet_functions/sign_data'
          },
          {
            id: 'verify_data',
            title: 'Verify Data',
            type: 'item',
            url: '/advanced_wallet_functions/verify_data'
          },     
        ]
      }
    ]
  },
  {
    id: 'delegated_proof_of_privacy_stake',
    title: 'Delegated Proof Of Privacy Stake',
    type: 'group',
    icon: 'icon-ui',
  },
];

const MAIN_MENU_NAVIGATION_ITEMS = [
  {
    id: 'wallet_settings',
    title: 'Wallet Settings',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'wallet_menu',
        title: 'Wallet Menu',
        type: 'item',
        url: '/wallet_menu/main_menu',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'wallet_connection_settings',
        title: 'Wallet Connection Settings',
        type: 'item',
        url: '/wallet_menu/wallet_connection_settings',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get(data:string) {
    // Constants
    const MAIN_MENU_ROUTE:string = "/wallet_menu/main_menu";
    const WALLET_CONNECTION_SETTINGS_ROUTE:string = "/wallet_menu/wallet_connection_settings";

    return data === MAIN_MENU_ROUTE || data === WALLET_CONNECTION_SETTINGS_ROUTE ? MAIN_MENU_NAVIGATION_ITEMS : NAVIGATION_ITEMS;
  }
}
