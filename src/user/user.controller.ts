import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
   import { UserService } from './user.service';
   import { User } from './user.entity';

   @Controller('users')
   export class UserController {
     constructor(private readonly userService: UserService) {}

     @Get()
     findAll(): User[] {
       return this.userService.findAll();
     }

     @Get(':id')
     findOne(@Param('id') id: string): User {
       return this.userService.findOne(+id);
     }

     @Post()
     create(@Body() user: User): User {
       return this.userService.create(user);
     }

     @Put(':id')
     update(@Param('id') id: string, @Body() updatedUser: Partial<User>): User {
       return this.userService.update(+id, updatedUser);
     }

     @Delete(':id')
     delete(@Param('id') id: string): void {
       this.userService.delete(+id);
     }
   }
