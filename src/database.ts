import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'test_dev',
        connectionLimit: 10
    });
    
    return connection;

}