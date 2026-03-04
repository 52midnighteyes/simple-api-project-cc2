import dotenv from 'dotenv';
dotenv.config();

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`missing env ${name}`);
  return v;
}

export const config = {
  PORT: Number(process.env.PORT ?? 8000),
};
