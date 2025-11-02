export const menus = [
  {
    id: '1',
    label: 'Dashboard',
    icon: '📊',
    url: '/dashboard',
    children: []
  },
  {
    id: '2',
    label: 'Products',
    icon: '📦',
    url: '/products',
    children: [
      {
        id: '2-1',
        label: 'All Products',
        icon: '📋',
        url: '/products/all'
      },
      {
        id: '2-2',
        label: 'Categories',
        icon: '🏷️',
        url: '/products/categories'
      },
      {
        id: '2-3',
        label: 'Inventory',
        icon: '📈',
        url: '/products/inventory'
      }
    ]
  },
  {
    id: '3',
    label: 'Orders',
    icon: '🛒',
    url: '/orders',
    children: [
      {
        id: '3-1',
        label: 'All Orders',
        icon: '📋',
        url: '/orders/all'
      },
      {
        id: '3-2',
        label: 'Pending',
        icon: '⏳',
        url: '/orders/pending'
      },
      {
        id: '3-3',
        label: 'Completed',
        icon: '✅',
        url: '/orders/completed'
      }
    ]
  },
  {
    id: '4',
    label: 'Customers',
    icon: '👥',
    url: '/customers',
    children: [
      {
        id: '4-1',
        label: 'All Customers',
        icon: '📋',
        url: '/customers/all'
      },
      {
        id: '4-2',
        label: 'New Customers',
        icon: '🆕',
        url: '/customers/new'
      },
      {
        id: '4-3',
        label: 'Loyal Customers',
        icon: '⭐',
        url: '/customers/loyal'
      }
    ]
  },
  {
    id: '5',
    label: 'Analytics',
    icon: '📊',
    url: '/analytics',
    children: [
      {
        id: '5-1',
        label: 'Sales Report',
        icon: '💰',
        url: '/analytics/sales'
      },
      {
        id: '5-2',
        label: 'Traffic Report',
        icon: '🚦',
        url: '/analytics/traffic'
      },
      {
        id: '5-3',
        label: 'Performance',
        icon: '⚡',
        url: '/analytics/performance'
      }
    ]
  },
  {
    id: '6',
    label: 'Settings',
    icon: '⚙️',
    url: '/settings',
    children: [
      {
        id: '6-1',
        label: 'General',
        icon: '🔧',
        url: '/settings/general'
      },
      {
        id: '6-2',
        label: 'Security',
        icon: '🔒',
        url: '/settings/security'
      },
      {
        id: '6-3',
        label: 'Notifications',
        icon: '🔔',
        url: '/settings/notifications'
      }
    ]
  }
];



export default menus;