import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {
	}

	async createUser(username: string): Promise<InsertResult> {
		return await this.userRepository.insert({ username });
	}

	findAll(): Promise<User[]> {
		return this.userRepository.find();
	}
}
