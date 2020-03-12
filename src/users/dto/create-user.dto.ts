import { IsEmail, IsOptional, Length, Matches } from 'class-validator';
import { IsEmailUsed } from '../decorators/is-email-used.decorator';

export class CreateUserDto {
    @IsEmail()
    @IsEmailUsed()
    email: string;

    @Length(6, 50)
    password: string;

    @Length(1, 50)
    name: string;

    @Length(1, 50)
    surname: string;

    @IsOptional()
    @Matches(/^\+\d{12}$/)
    phone?: string;

    @IsOptional()
    @Length(1, 50)
    city?: string;
}
