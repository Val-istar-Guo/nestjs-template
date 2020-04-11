import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AdminModule } from './admin/admin.module'

const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'host',
  port: 8302,
  username: 'username',
  password: 'password',
  database: 'service_service_com',
  entities: [],
  synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AdminModule,
  ],
  controllers: [],
})
export class AppModule {}
