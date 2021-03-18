import mongoose from 'mongoose';
import { ITicket } from './ticket.interface';

export interface IUser extends mongoose.Document {
  username: string;
  password: string;
  role?: string;
  date?: Date;
  tickets?: [{ ticket: ITicket | string }];

  comparePassword(password: string): Promise<boolean>;
}
