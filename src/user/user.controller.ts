import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { UpdateUserDto } from '@app/user/dto/updateUser.dto';
import { LoginDto } from '@app/user/dto/login.dto';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';
import { User } from '@app/decorators/user.decorator';
import { UserEntity } from './user.entity';
import { AuthGuard } from '../guards/auth.guard';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(@Body('user') loginDto: LoginDto): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(user);
  }

  @Put('user')
  @UseGuards(AuthGuard)
  async updateUser(
    @Body('user') updateUserDto: UpdateUserDto,
    @User('id') currentUserId: number,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(currentUserId, updateUserDto);
    return this.userService.buildUserResponse(user);
  }
}
