import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: process.env.host||'localhost',
        user: process.env.user||'root',
        password: process.env.password|| 'password',
        database: process.env.database||'test_dev'
       // connectionLimit: 10
    });
    
    return connection;

}