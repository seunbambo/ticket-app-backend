import mongoose from 'mongoose';

export interface ITicket extends mongoose.Document {
  _id: string;
  user: string;
  ticketId: string;
  fullname: string;
  email: string;
  status: string;
  department: string;
  priority: string;
  subject: string;
  description: string;
  created: Date;
  closed?: boolean;
  dueDate?: Date;
}
