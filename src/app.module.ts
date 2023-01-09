import { UserModule } from './modules/user/user.module';
import { AuthentificationModule } from './modules/athentification/authentification.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    AuthentificationModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/outdoorsdatabase'),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }