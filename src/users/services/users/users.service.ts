import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private users = [
    { username: 'Afif', email: 'afif@gmail.com', id: 1 },
    { username: 'Alfiano', email: 'alfiano@gmail.com', id: 2 },
  ];
  fetchUsers() {
    return this.users;
  }

  createUser(userData: CreateUserType) {
    const id = Math.random();
    const data = { ...userData, id };
    this.users.push(data);
  }

  fetchUserById(id: number) {
    return this.users.filter((item) => item.id === id);
  }
}
