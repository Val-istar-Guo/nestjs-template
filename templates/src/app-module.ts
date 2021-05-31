import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AdminModule } from './admin/admin.module'
import { env } from './util/env'


const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'host',
  port: 3306,
  username: 'username',
  password: 'password',
  database: 'database',
  entities: [],
  synchronize: !env.is.prod,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AdminModule,
  ],
  controllers: [],
})
export class AppModule {}
