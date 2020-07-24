import { Pool } from 'pg';

// Google Cloud PostgreSQL Connection

const dbSocketPath = process.env.DB_SOCKET_PATH

export const DB = process.env.INSTANCE_CONNECTION_NAME ? new Pool({
	user: process.env.PGUSER,
	host: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
  }) : null;

export function query(text, values=[]) {
	return DB.query(text, values).then(r => r.rows);
}

export function find(text, values=[]) {
	return query(text, values).then(arr => arr[0]);
}
