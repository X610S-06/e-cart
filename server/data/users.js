import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'X',
        email: 'x@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Y',
        email: 'y@example.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users