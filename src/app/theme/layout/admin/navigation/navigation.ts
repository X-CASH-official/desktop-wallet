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
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'collapse',
        icon: 'feather icon-home',
        children: [          
          {
            id: 'e-commerce',
            title: 'Ecommerce',
            type: 'item',
            url: '/dashboard/e-commerce'
          },
          {
            id: 'crm',
            title: 'CRM',
            type: 'item',
            url: '/dashboard/crm'
          },
          {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/dashboard/analytics'
          },
          {
            id: 'crypto',
            title: 'Crypto',
            type: 'item',
            url: '/dashboard/crypto',
            badge: {
              title: 'NEW',
              type: 'label-danger'
            }
          },
          {
            id: 'project',
            title: 'Project',
            type: 'item',
            url: '/dashboard/project'
          }
        ]
      },
      {
        id: 'page-layouts',
        title: 'Page Layouts',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'vertical',
            title: 'Vertical',
            type: 'collapse',
            children: [
              {
                id: 'v-static',
                title: 'Static',
                type: 'item',
                url: '/layout/static',
                target: true,
              },
              {
                id: 'v-fixed',
                title: 'Fixed',
                type: 'item',
                url: '/layout/fixed',
                target: true,
              },
              {
                id: 'v-nav-fixed',
                title: 'Navbar Fixed',
                type: 'item',
                url: '/layout/nav-fixed',
                target: true,
              },
              {
                id: 'v-collapse-menu',
                title: 'Collapse Menu',
                type: 'item',
                url: '/layout/collapse-menu',
                target: true,
              }
            ]
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            type: 'item',
            url: '/layout/horizontal',
            target: true
          },
          {
            id: 'box-layout',
            title: 'Box Layout',
            type: 'item',
            url: '/layout/box',
            target: true
          },
          {
            id: 'rtl',
            title: 'RTL',
            type: 'item',
            url: '/layout/rtl',
            target: true
          },
          {
            id: 'light-layout',
            title: 'Light Layout',
            type: 'item',
            url: '/layout/light',
            target: true
          },
          {
            id: 'dark-layout',
            title: 'Dark Layout',
            type: 'item',
            url: '/layout/dark',
            target: true,
            badge: {
              title: 'Hot',
              type: 'label-danger'
            }
          },
          {
            id: 'icon-color',
            title: 'Color Icon',
            type: 'item',
            url: '/layout/icon-color',
            target: true
          }
        ]
      },
      {
        id: 'widget',
        title: 'Widget',
        type: 'collapse',
        icon: 'feather icon-layers',
        badge: {
          title: '100+',
          type: 'label-info'
        },
        children: [
          {
            id: 'statistic',
            title: 'Statistic',
            type: 'item',
            url: '/widget/statistic'
          },
          {
            id: 'data',
            title: 'Data',
            type: 'item',
            url: '/widget/data'
          },
          {
            id: 'table',
            title: 'Table',
            type: 'item',
            url: '/widget/table'
          },
          {
            id: 'user',
            title: 'User',
            type: 'item',
            url: '/widget/user'
          },
          {
            id: 'chart',
            title: 'Chart',
            type: 'item',
            url: '/widget/chart'
          }
        ]
      }
    ]
  },
  {
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumb & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/basic/cards'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/basic/carousel'
          },
          {
            id: 'grid-system',
            title: 'Grid System',
            type: 'item',
            url: '/basic/grid-system'
          },
          {
            id: 'progress',
            title: 'Progress',
            type: 'item',
            url: '/basic/progress'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/basic/modal'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography'
          },
          {
            id: 'tooltip-popovers',
            title: 'Tooltip & Popovers',
            type: 'item',
            url: '/basic/tooltip-popovers'
          },
          {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/basic/other'
          }
        ]
      },
      {
        id: 'advance',
        title: 'Advance',
        type: 'collapse',
        icon: 'feather icon-gitlab',
        children: [
          {
            id: 'sweet-alert',
            title: 'Sweet Alert',
            type: 'item',
            url: '/advance/alert'
          },
          {
            id: 'datepicker',
            title: 'Datepicker',
            type: 'item',
            url: '/advance/datepicker'
          },
          {
            id: 'task-board',
            title: 'Task Board',
            type: 'item',
            url: '/advance/task-board'
          },
          {
            id: 'light-box',
            title: 'Light Box',
            type: 'item',
            url: '/advance/light-box'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/advance/modal'
          },
          {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '/advance/notification'
          },
          /*{
            id: 'nestable',
            title: 'Nestable',
            type: 'item',
            url: '/advance/nestable'
          },
          {
            id: 'p-notify',
            title: 'P-Notify',
            type: 'item',
            url: '/advance/p-notify'
          },*/
          {
            id: 'rating',
            title: 'Rating',
            type: 'item',
            url: '/advance/rating'
          },
          /*{
            id: 'range-slider',
            title: 'Range Slider',
            type: 'item',
            url: '/advance/range-slider'
          },
          {
            id: 'slider',
            title: 'Slider',
            type: 'item',
            url: '/advance/slider'
          },
          {
            id: 'syntax highlighter',
            title: 'Syntax Highlighter',
            type: 'item',
            url: '/advance/syntax-highlighter'
          },
          {
            id: 'tour',
            title: 'Tour',
            type: 'item',
            url: '/advance/tour'
          },
          {
            id: 'tree-view',
            title: 'Tree View',
            type: 'item',
            url: '/advance/tree-view'
          },
          {
            id: 'toolbar',
            title: 'Toolbar',
            type: 'item',
            url: '/advance/toolbar'
          }*/
        ]
      },
      /*{
        id: 'extra',
        title: 'Extra',
        type: 'collapse',
        icon: 'feather icon-package',
        children: [
          {
            id: 'session-timeout',
            title: 'Session Timeout',
            type: 'item',
            url: '/extra/session-timeout'
          },
          {
            id: 'session-idle-timeout',
            title: 'Session Idle Timeout',
            type: 'item',
            url: '/extra/session-idle-timeout'
          },
          {
            id: 'offline',
            title: 'Offline',
            type: 'item',
            url: '/extra/offline'
          }
        ]
      },*/
      /*{
        id: 'animations',
        title: 'Animations',
        type: 'item',
        icon: 'feather icon-aperture',
        url: '/animations',
        classes: 'nav-item'
      },*/
      /*{
        id: 'icons',
        title: 'Icons',
        type: 'collapse',
        icon: 'feather icon-feather',
        children: [
          {
            id: 'feather',
            title: 'Feather',
            type: 'item',
            url: '/icons/feather',
            badge: {
              title: 'NEW',
              type: 'label-danger'
            }
          },
          {
            id: 'font-awesome-5',
            title: 'Font-Awesome 5',
            type: 'item',
            url: '/icons/font-awesome-5',
            badge: {
              title: '1000+',
              type: 'label-primary'
            }
          },
          {
            id: 'flag',
            title: 'Flag',
            type: 'item',
            url: '/icons/flag'
          },
          {
            id: 'material',
            title: 'Material',
            type: 'item',
            url: '/icons/material'
          },
          {
            id: 'simple-line',
            title: 'Simple Line',
            type: 'item',
            url: '/icons/simple-line'
          },
          {
            id: 'themify',
            title: 'Themify',
            type: 'item',
            url: '/icons/themify'
          }
        ]
      }*/
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Forms',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
          {
            id: 'form-elements',
            title: 'Form Elements',
            type: 'item',
            url: '/forms/basic'
          },
          {
            id: 'form-elements',
            title: 'Form Advance',
            type: 'item',
            url: '/forms/advance'
          },
          {
            id: 'form-validation',
            title: 'Form Validation',
            type: 'item',
            url: '/forms/validation'
          },
          {
            id: 'form-masking',
            title: 'Form Masking',
            type: 'item',
            url: '/forms/masking'
          },
          {
            id: 'form-wizard',
            title: 'Form Wizard',
            type: 'item',
            url: '/forms/wizard'
          },
          {
            id: 'form-picker',
            title: 'Form Picker',
            type: 'item',
            url: '/forms/picker'
          },
          {
            id: 'form-select',
            title: 'Form Select',
            type: 'item',
            url: '/forms/select'
          }
        ]
      }
    ]
  },
  {
    id: 'table',
    title: 'Table',
    type: 'group',
    icon: 'icon-table',
    children: [
      {
        id: 'tables',
        title: 'Tables',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
          {
            id: 'bootstrap',
            title: 'Bootstrap',
            type: 'item',
            url: '/tables/bootstrap'
          },
          {
            id: 'data-table',
            title: 'Data Table',
            type: 'item',
            url: '/tables/datatable'
          },
          /*{
            id: 'foo-table',
            title: 'Foo Table',
            type: 'item',
            url: '/tables/foo-table'
          }*/
        ]
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Chart & Maps',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        type: 'collapse',
        icon: 'feather icon-pie-chart',
        children: [
          /*{
            id: 'amchart',
            title: 'AM Chart',
            type: 'item',
            url: '/charts/amchart'
          },*/
          {
            id: 'chart-js',
            title: 'Chart JS',
            type: 'item',
            url: '/charts/chart-js'
          },
          {
            id: 'e-chart',
            title: 'E-Chart',
            type: 'item',
            url: '/charts/e-chart'
          },
          {
            id: 'google',
            title: 'Google',
            type: 'item',
            url: '/charts/google'
          },
          {
            id: 'high-chart',
            title: 'High Chart',
            type: 'item',
            url: '/charts/high-chart'
          },
          /*{
            id: 'knob',
            title: 'Knob',
            type: 'item',
            url: '/charts/knob'
          },*/
          {
            id: 'morris',
            title: 'Morris',
            type: 'item',
            url: '/charts/morris'
          },
          {
            id: 'nvd3',
            title: 'NVD3',
            type: 'item',
            url: '/charts/nvd3'
          },
          {
            id: 'peity',
            title: 'Peity',
            type: 'item',
            url: '/charts/peity'
          },
          {
            id: 'radial',
            title: 'Radial',
            type: 'item',
            url: '/charts/radial'
          }
        ]
      },
      {
        id: 'maps',
        title: 'Maps',
        type: 'collapse',
        icon: 'feather icon-map',
        children: [
          {
            id: 'google',
            title: 'Google',
            type: 'item',
            url: '/maps/google'
          },
          /*{
            id: 'vector',
            title: 'Vector',
            type: 'item',
            url: '/maps/vector'
          },
          {
            id: 'gmap-search-api',
            title: 'Gmap Search API',
            type: 'item',
            url: '/maps/gmap-search-api'
          },
          {
            id: 'location',
            title: 'Location',
            type: 'item',
            url: '/maps/location'
          }*/
        ]
      },
      {
        id: 'landing-page',
        title: 'Landing Page',
        type: 'item',
        icon: 'feather icon-navigation-2',
        url: '/landing',
        classes: 'nav-item',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'reset-password',
            title: 'Reset Password',
            type: 'item',
            url: '/auth/reset-password',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'change-password',
            title: 'Change Password',
            type: 'item',
            url: '/auth/change-password',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'personal-information',
            title: 'Personal Information',
            type: 'item',
            url: '/auth/personal-information',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'profile-settings',
            title: 'Profile Settings',
            type: 'item',
            url: '/auth/profile-settings',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'map-form',
            title: 'Map Form',
            type: 'item',
            url: '/auth/map-form',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'subscribe',
            title: 'Subscribe',
            type: 'item',
            url: '/auth/subscribe',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        type: 'collapse',
        icon: 'feather icon-sliders',
        children: [
          {
            id: 'error',
            title: 'Error',
            type: 'item',
            url: '/maintenance/error',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'coming-soon',
            title: 'Coming Soon',
            type: 'item',
            url: '/maintenance/coming-soon',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'offline-ui',
            title: 'Offline UI',
            type: 'item',
            url: '/maintenance/offline-ui',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'app',
    title: 'App',
    type: 'group',
    icon: 'icon-app',
    children: [
      {
        id: 'message',
        title: 'Message',
        type: 'item',
        classes: 'nav-item',
        url: '/message',
        icon: 'icon-message-circle'
      },
      {
        id: 'task',
        title: 'Task',
        type: 'collapse',
        icon: 'feather icon-clipboard',
        children: [
          {
            id: 'task-list',
            title: 'List',
            type: 'item',
            url: '/task/list'
          },
          {
            id: 'task-board',
            title: 'Board',
            type: 'item',
            url: '/task/board'
          },
          {
            id: 'task-detail',
            title: 'Detail',
            type: 'item',
            url: '/task/detail'
          }
        ]
      },
      {
        id: 'to-dos',
        title: 'Todo',
        type: 'collapse',
        icon: 'feather icon-check-square',
        children: [
          {
            id: 'todo',
            title: 'Todo',
            type: 'item',
            url: '/todo/basic'
          },
          /*{
            id: 'notes',
            title: 'Notes',
            type: 'item',
            url: '/todo/notes'
          }*/
        ]
      },
      {
        id: 'gallery',
        title: 'Gallery',
        type: 'collapse',
        icon: 'feather icon-image',
        children: [
          {
            id: 'grid',
            title: 'Grid',
            type: 'item',
            url: '/gallery/grid'
          },
          {
            id: 'masonry',
            title: 'Masonry',
            type: 'item',
            url: '/gallery/masonry'
          },
          {
            id: 'advance-gallery',
            title: 'Advance',
            type: 'item',
            url: '/gallery/advance'
          }
        ]
      }
    ]
  },
  {
    id: 'extension',
    title: 'Extension',
    type: 'group',
    icon: 'icon-extension',
    children: [
      {
        id: 'editor',
        title: 'Editor',
        type: 'collapse',
        icon: 'feather icon-file-plus',
        children: [
          /*{
            id: 'ck-Editor',
            title: 'CK-Editor',
            type: 'collapse',
            children: [
              {
                id: 'classic',
                title: 'Classic',
                type: 'item',
                url: '/editor/ck-editor/classic'
              },
              {
                id: 'balloon',
                title: 'Balloon',
                type: 'item',
                url: '/editor/ck-editor/balloon'
              },
              {
                id: 'inline',
                title: 'Inline',
                type: 'item',
                url: '/editor/ck-editor/inline'
              },
              {
                id: 'document',
                title: 'Document',
                type: 'item',
                url: '/editor/ck-editor/document'
              }
            ]
          },*/
          {
            id: 'tinymce-editor',
            title: 'Tinymce Editor',
            type: 'item',
            url: '/editor/tinymce'
          },
          {
            id: 'pell-wysiwyg',
            title: 'Pell WYSIWYG',
            type: 'item',
            url: '/editor/wysiwyg'
          }
        ]
      },
      {
        id: 'invoice',
        title: 'Invoice',
        type: 'collapse',
        icon: 'feather icon-file-minus',
        children: [
          {
            id: 'invoice-basic',
            title: 'Invoice Basic',
            type: 'item',
            url: '/invoice/basic'
          },
          {
            id: 'invoice-summary',
            title: 'Invoice Summary',
            type: 'item',
            url: '/invoice/summary'
          },
          {
            id: 'invoice-list',
            title: 'Invoice List',
            type: 'item',
            url: '/invoice/list'
          }
        ]
      },
      {
        id: 'full-calendar',
        title: 'Full Calendar',
        type: 'item',
        url: '/full-calendar',
        classes: 'nav-item',
        icon: 'feather icon-calendar'
      },
      {
        id: 'file-upload',
        title: 'File Upload',
        type: 'item',
        url: '/file-upload',
        classes: 'nav-item',
        icon: 'feather icon-upload-cloud'
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-other',
    children: [
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.2',
            title: 'Menu Level 2.2',
            type: 'collapse',
            children: [
              {
                id: 'menu-level-2.2.1',
                title: 'Menu Level 2.2.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-2.2.2',
                title: 'Menu Level 2.2.2',
                type: 'item',
                url: 'javascript:',
                external: true
              }
            ]
          }
        ]
      },
      {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        type: 'item',
        url: 'javascript:',
        classes: 'nav-item disabled',
        icon: 'feather icon-power',
        external: true
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    type: 'group',
    icon: 'icon-support',
    children: [
      {
        id: 'documentation',
        title: 'Documentation',
        type: 'item',
        icon: 'feather icon-book',
        classes: 'nav-item',
        url: 'http://html.codedthemes.com/datta-able/angular/docs',
        target: true,
        external: true
      },
      {
        id: 'need-support',
        title: 'Need Support?',
        type: 'item',
        icon: 'feather icon-help-circle',
        classes: 'nav-item',
        url: 'https://codedthemes.support-hub.io/',
        target: true,
        external: true
      }
    ]
  }
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
    return data === "/wallet_menu/main_menu" ? MAIN_MENU_NAVIGATION_ITEMS : NAVIGATION_ITEMS;
  }
}
