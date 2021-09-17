import { User } from './user';

export interface Tenant {
  id: number;
  name: string;
  users?: User[];
}