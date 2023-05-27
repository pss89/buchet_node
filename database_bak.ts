import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const databaseConfig: TypeOrmModuleOptions ={
//     type: ConfigModule.DB_TYPE,
//     host: ConfigModule.DB_HOST,
//     port: parseInt(ConfigModule.DB_PORT),
//     username: ConfigModule.DB_USERNAME,
//     password: ConfigModule.DB_PASSWORD,
//     database: ConfigModule.DB_DATABASE,
//     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//     synchronize: true,
//   };

// export const databaseConfig: TypeOrmModuleOptions = {
//     type: configService.get<string>('DB_TYPE'),
//     host: configService.get<string>('DB_HOST'),
//     port: parseInt(configService.get<string>('DB_PORT')),
//     username: configService.get<string>('DB_USERNAME'),
//     password: configService.get<string>('DB_PASSWORD'),
//     database: configService.get<string>('DB_DATABASE'),
//     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//     synchronize: true,
// };

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from "../../modules/users/entities/users.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: configService.get('DB_TYPE'),
                host: configService.get('DB_HOST'),
                port: parseInt(configService.get('DB_PORT')),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
        }),
    ],
})

export class DatabaseModule {}