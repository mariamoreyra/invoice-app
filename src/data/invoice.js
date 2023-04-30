export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'ARG',
            city: 'Buenos Aires',
            street: 'Corrientes',
            number: 1250
        }
    },
    company: {
        name: 'Backend',
        fiscalNumber: 125255,
    },
    items: [
        {
            id:1,
            product: 'Monitor',
            price: 1250,
            quantity: 1
        },
        {
            id:2,
            product: 'PC',
            price: 3500,
            quantity: 1
        },
        {
            id:3,
            product: 'Mouse',
            price: 580,
            quantity: 1
        },
    ]
}
