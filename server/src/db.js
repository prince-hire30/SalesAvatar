import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool = null;
let isMySQLConnected = false;

export async function initDB() {
  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '4545';
  const database = process.env.DB_NAME || 'sales_avatar';

  try {
    // 1. Ensure database exists
    const rootConn = await mysql.createConnection({
      host,
      user,
      password,
      connectTimeout: 4000
    });
    await rootConn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await rootConn.end();

    // 2. Establish connection pool
    pool = mysql.createPool({
      host,
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 15,
      queueLimit: 0,
      connectTimeout: 4000
    });

    const testConn = await pool.getConnection();
    console.log(`[Database] Connected successfully to MySQL database "${database}" at ${host}`);
    isMySQLConnected = true;
    testConn.release();

    // 3. Initialize Demo Requests Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(120) NOT NULL,
        company VARCHAR(150) NOT NULL,
        phone VARCHAR(50),
        team_size VARCHAR(50) DEFAULT '10-50',
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 4. Initialize Trial Signups Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS trial_signups (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(120) UNIQUE NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(150),
        plan VARCHAR(50) DEFAULT 'Professional',
        billing_cycle VARCHAR(20) DEFAULT 'monthly',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 5. Initialize Contact & Enterprise Inquiries Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(120) NOT NULL,
        company VARCHAR(150),
        phone VARCHAR(50),
        requirement TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('[Database] MySQL tables verified and ready.');
  } catch (err) {
    console.error(`[Database] MySQL Error: ${err.message}`);
    isMySQLConnected = false;
  }
}

export function getPool() {
  return pool;
}

export function isConnected() {
  return isMySQLConnected;
}
