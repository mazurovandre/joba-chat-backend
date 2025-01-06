export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

export const { PORT = 3000, DB_ADDRESS = 'mongodb://localhost:27017/jobachat' } = process.env;
