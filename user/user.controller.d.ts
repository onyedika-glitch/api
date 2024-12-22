import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): User[];
    findOne(id: string): User;
    create(user: User): User;
    update(id: string, updatedUser: Partial<User>): User;
    delete(id: string): void;
}
