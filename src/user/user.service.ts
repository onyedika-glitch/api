import { Injectable } from '@nestjs/common';
   import { User } from './user.entity';

   @Injectable()
   export class UserService {
     private users: User[] = [];
     private idCounter = 1;

     findAll(): User[] {
       return this.users;
     }

     findOne(id: number): User {
       return this.users.find(user => user.id === id);
     }

     create(user: User): User {
       user.id = this.idCounter++;
       this.users.push(user);
       return user;
     }

     update(id: number, updatedUser: Partial<User>): User {
       const user = this.findOne(id);
       if (user) {
         Object.assign(user, updatedUser);
       }
       return user;
     }

     delete(id: number): void {
       this.users = this.users.filter(user => user.id !== id);
     }
   }
