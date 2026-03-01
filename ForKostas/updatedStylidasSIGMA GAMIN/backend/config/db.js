import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',        // XAMPP default
  password: '',        // XAMPP default is empty
  database: 'testdummywebpage' // Your database name
});

export default pool;