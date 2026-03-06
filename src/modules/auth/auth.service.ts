import argon2 from 'argon2';
import { IRegisterParams, IUser } from './auth.interface.js';
import { findUserByEmail, saveUsers } from './auth.repository.js';
import { AppError } from '../../class/appError.js';
import { randomUUID } from 'node:crypto';
import { userDb } from './auth.store.js';
export async function userRegisterService(params: IRegisterParams) {
  try {
    const isAvail = findUserByEmail(params.email);
    if (isAvail)
      throw new AppError(409, 'user with that email is already exits!', true);

    // hashing password
    const hashed = await argon2.hash(params.password)

    const user: IUser = {
      id: randomUUID(),
      email: params.email.toLowerCase(),
      password: hashed,
      first_name: params.first_name,
      last_name: params.last_name,
      avatar: params.avatar || null,
      role: params.role
    }

    const {password, ...payload} = user
    
userDb.set(user.email, user)
const data = Array.from(userDb.values())
await saveUsers(data)

return payload

  } catch (error) {
    throw error;
  }
}