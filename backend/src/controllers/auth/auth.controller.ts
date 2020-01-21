import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { AuthResponse } from 'shared';

@Controller('auth')
export class AuthController {

	constructor(
		private readonly userService: UserService,
	) {
	}

	@Get()
	async index(@Request() req: Request): Promise<string> {
		return JSON.stringify({
			result: await this.userService.createUser('Anluin'),
			all: await this.userService.findAll(),
		});
	}

	@Post('login')
	async login(@Req() req: Request): Promise<AuthResponse> {
		return {
			token: 'token',
		};
	}

	@Post('register')
	async register(@Request() req: Request): Promise<AuthResponse> {
		return {
			token: 'token',
		};
	}
}
