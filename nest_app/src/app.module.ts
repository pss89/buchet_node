import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest_user',
      password: 'sptmxm@1234',
      database: 'nest_db',
      entities: [], // 사용할 entity의 클래스명을 넣어둔다.
      synchronize: false, // false로 해두는 게 안전하다.
      // extra: {
      //   allowPublicKeyRetrieval: true,
      // },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';

// dotenv.config();

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.test',
//       ignoreEnvFile: process.env.NODE_ENV === 'prod',
//     }),
//     TypeOrmModule.forRoot({
//       type: process.env.DB_TYPE,
//       host: process.env.DB_HOST,
//       port: +process.env.DB_PORT,
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       synchronize: false,
//       logging: true,
//       entities: [],
//       autoLoadEntities: true,
//     }),
//   ],
//   controllers: [],
//   providers: [],
// })

// // import { Module } from '@nestjs/common';
// // import { AppController } from './app.controller';
// // import { AppService } from './app.service';

// // import { ConfigModule } from '@nestjs/config';

// // import { TypeOrmModule } from '@nestjs/typeorm';
// // import { DatabaseModule } from './config/database/database.module';
// // // import { UsersModule } from './modules/users/users.module';

// // import * as Joi from '@hapi/joi';

// // // console.log(Joi.string().required());

// // @Module({
// //   imports:[
// //     ConfigModule.forRoot({
// //       validationSchema: Joi.object({
// //         DB_HOST: Joi.string().required(),
// //         DB_PORT: Joi.number().required(),
// //         DB_USERNAME: Joi.string().required(),
// //         DB_PASSWORD: Joi.string().required(),
// //         DB_DATABASE: Joi.string().required(),
// //       }),
// //     }),
// //     // UsersModule,
// //     DatabaseModule,
// //   ],
// //   controllers: [AppController],
// //   providers: [AppService],
// // })

// // export class AppModule {}

// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       cache: true,
//       isGlobal: true,
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
