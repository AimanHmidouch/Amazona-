import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: 'Aiman',
            email: 'aiman.hmidouch96@gmail.com',
            password: bcrypt.hashSync('0000', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('0000', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            
            name:'Nike >Slim shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock: 10,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            
            name:'Nike long shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:190,
            countInStock: 0,
            brand:'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Adidas Slim shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:60,
            countInStock: 1,
            brand:'Nike',
            rating: 4,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            
            name:'acliclas Slim shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock: 5,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            
            name:'Nike >Slim shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock: 3,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            
            name:'Nike >Slim shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price:120,
            brand:'Nike',
            countInStock: 105,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        }
    ]
}

export default data;