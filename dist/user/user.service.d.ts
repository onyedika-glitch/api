import { User } from './user.entity';
export declare class UserService {
    private users;
    private idCounter;
    findAll(): User[];
    findOne(id: number): User;
    create(user: User): User;
    update(id: number, updatedUser: Partial<User>): User;
    delete(id: number): void;
}
