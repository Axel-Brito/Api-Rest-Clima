import pg from "pg";


const pool = new pg.Pool({
    host: 'localhost',
    user: 'grupo_x',
    password:'admin',
    database: 'apiclima',
    port: '4321'
});

export default pool;