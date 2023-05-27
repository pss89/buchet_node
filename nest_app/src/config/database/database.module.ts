// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// // import { Users } from "../modules/users/entities/users.entity";

// @Module({
//     imports: [
//         TypeOrmModule.forRootAsync({
//             imports: [ConfigModule],
//             inject: [ConfigService],
//             useFactory: (configService: ConfigService) => ({
//                 // type: configService.get('DB_TYPE'),
//                 type:'mysql',
//                 host: configService.get('DB_HOST'),
//                 port: parseInt(configService.get('DB_PORT')),
//                 username: configService.get('DB_USERNAME'),
//                 password: configService.get('DB_PASSWORD'),
//                 database: configService.get('DB_DATABASE'),
//                 entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//                 synchronize: true,
//             }),
//         }),
//     ],
// })

// export class DatabaseModule {}