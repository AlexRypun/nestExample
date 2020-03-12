import { Body, Controller, Get, Param, ParseIntPipe, Patch, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { RolesGuard } from '../common/guards/roles.guard';
import { AllowedRoles } from '../common/decorators/allowed-roles.decorator';
import { SelfActionGuard } from './guards/self-action.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserInterceptor } from './interceptors/update-user.interceptor';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @AllowedRoles('admin')
    @UseGuards(AuthGuard('jwt'), SelfActionGuard, RolesGuard)
    @Get('/:id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.usersService.getUserById(id);
    }

    @AllowedRoles('admin')
    @UseGuards(AuthGuard('jwt'), SelfActionGuard, RolesGuard)
    @UseInterceptors(UpdateUserInterceptor)
    @Patch('/:id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) params: UpdateUserDto
    ): Promise<User> {
        return this.usersService.updateUser(id, params);
    }
}
