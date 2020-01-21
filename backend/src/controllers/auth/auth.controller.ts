import { Controller, Get, Post, Req, Request } from '@nestjs/common';

import { AuthResponse } from 'shared';

import { UserService } from '../../services/user/user.service';

@Controller('auth')
export class AuthController {

	constructor(
		private readonly userService: UserService,
	) {
	}

	@Get()
	async index(@Request() req: Request): Promise<string> {
		return JSON.stringify({
			all: await this.userService.findAll(),
			result: await this.userService.createUser('Anluin'),
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
