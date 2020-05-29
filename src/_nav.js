export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            name: 'Customer',
            url: '/customer',
            icon: 'icon-speedometer',
            badge: {
                variant: 'success',
                text: 'NEW',
            },
        },
        {
            name: 'Ticket',
            url: '/tickets',
            icon: 'icon-speedometer',
            badge: {
                variant: 'primary',
                text: 'NEW',
            },
            children: [
                {
                  name: 'TicketNew',
                  url: '/tickets/new',
                  icon: 'icon-puzzle',
                },
            ]
            
        },
    ],
};
