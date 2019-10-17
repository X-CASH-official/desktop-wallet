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
    id: 'overview',
    title: 'Overview',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'wallet_home',
        title: 'Wallet',
        type: 'item',
        url: '/wallet-dashboard',
        classes: 'nav-item',
        icon: 'fas fa-wallet',
      },
      {
        id: 'contacts',
        title: 'Contacts',
        type: 'item',
        url: '/contacts',
        classes: 'nav-item',
        icon: 'feather icon-users'
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        url: '/settings',
        classes: 'nav-item',
        icon: 'feather icon-settings'
      },
      {
        id: 'connection',
        title: 'Connection',
        type: 'item',
        url: '/connection',
        classes: 'nav-item',
        icon: 'feather icon-sliders'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NAVIGATION_ITEMS;
  }
}
