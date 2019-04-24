export const productlistJson = [

    {
        productName: 'Acedasine',
        quantity: null,
        tridePrice: 10,
        savings: '',
        netPrice: null,
        productInformation: 'Product Information',
        discount: 20,
        color: 'red',
        promotions: '',
        noDisCount: 'noDisCount',

    },
    {
        productName: 'Affrin',
        quantity: null,
        tridePrice: 20,
        savings: '',
        netPrice: 600,
        productInformation: 'Product Information',
        discount: 10,
        color: 'green',
        promotions: 'promotions',
        noDisCount: 'noDisCount',
        disabled: true,


    },
    {
        productName: 'Crosin',
        quantity: null,
        tridePrice: 30,
        savings: '',
        netPrice: null,
        productInformation: 'Product Information',
        discount: 20,
        color: 'blue',
        promotions: 'yes',
        disabled: true,

    },
    {
        productName: 'Affrin',
        quantity: 1,
        tridePrice: 20,
        savings: '',
        netPrice: null,
        productInformation: 'Product Information',
        discount: 10,
        color: 'green',
        promotions: 'yes'

    },

];


export const orderJson = [

    {
        productName: 'Acedasine',
        quantity: 1,
        tridePrice: 10,
        savings: '',
        netPrice: 600,
        productInformation: 'Product Information',
        discount: 20,
        color: 'red',
        promotions: '',
        noDisCount: 'noDisCount',
        status: 'shipped',
    },
    {
        productName: 'Affrin',
        quantity: 2,
        tridePrice: 20,
        savings: '',
        netPrice: 600,
        productInformation: 'Product Information',
        discount: 10,
        color: 'green',
        promotions: 'promotions',
        noDisCount: 'noDisCount',
        status: 'shipped',


    },
    {
        productName: 'Crosin',
        quantity: 2,
        tridePrice: 30,
        savings: '',
        netPrice: 600,
        productInformation: 'Product Information',
        discount: 20,
        color: 'blue',
        promotions: 'yes',
        status: 'shipped',

    },
    {
        productName: 'Affrin',
        quantity: 2,
        tridePrice: 20,
        savings: '',
        netPrice: 600,
        productInformation: 'Product Information',
        discount: 10,
        color: 'green',
        promotions: 'yes',
        status: 'shipped',

    },

]


export const addressJson = [
    {
        shipping_address: [{
            name: 'Jane Smith',
            street_address: '1600 Pennsylvania Avenue NW',
            city: 'Washington',
            state: 'DC',
            zip: 533234
        },
        {
            name: 'Jane',
            street_address: '1600 Pennsylvania Avenue NW',
            city: 'Washington',
            state: 'DC',
            zip: 50032
        },


        ],
        billing_address: [
            {
                name: 'Jane',
                street_address: '1st Street SE',
                city: 'Washington',
                state: 'DC',
                zip: 50032
            },
            {
                name: 'Smith',
                street_address: '1st Street SE',
                city: 'Washington',
                state: 'DC',
                zip: 50032
            }
        ]
    }

]