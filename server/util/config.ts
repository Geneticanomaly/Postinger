import dotenv from 'dotenv';

dotenv.config();

const DATABASE_DEV_URL: string =
    process.env.DATABASE_DEV_URL ||
    'postgres://the_username:the_password@localhost:5432/the_database';

export const DATABASE_URL: string = process.env.DATABASE_URL || DATABASE_DEV_URL;
export const PORT: number = Number(process.env.PORT) || 3003;
export const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || '';
export const REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || '';
