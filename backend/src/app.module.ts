import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthController } from './controllers/auth/auth.controller';
import { User } from './entities/user.entity';
import { UserService } from './services/user/user.service';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database',
			entities: [User],
			synchronize: true,
		}),
		TypeOrmModule.forFeature([User]),
	],
	controllers: [AuthController],
	providers: [UserService],
})
export class AppModule {
	constructor(
		private readonly connection: Connection,
	) {
	}
}
