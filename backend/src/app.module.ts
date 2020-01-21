import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthController } from './controllers/auth/auth.controller';
import { User } from './entities/user.entity';
import { UserService } from './services/user/user.service';

@Module({
	controllers: [AuthController],
	imports: [
		TypeOrmModule.forRoot({
			database: 'database',
			entities: [User],
			synchronize: true,
			type: 'sqlite',
		}),
		TypeOrmModule.forFeature([User]),
	],
	providers: [UserService],
})
export class AppModule {
	constructor(
		private readonly connection: Connection,
	) {
	}
}
