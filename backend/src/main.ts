import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async function main() {
	const app = await NestFactory.create(AppModule, { cors: true });
	app.use((req: any, res: any, next: any) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
		next();
	});
	await app.listen(3000);
})();
