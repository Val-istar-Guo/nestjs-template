import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app-module'
import { ValidationPipe } from '@nestjs/common'
import { name, version } from '@root/package.json'
import * as selfConfig from '@/config/self'
import '@/config/sotest'
import morgan from 'morgan'


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.use(morgan('tiny'))

  const options = new DocumentBuilder()
    .setTitle(name)
    .setVersion(version)
    .addTag('reporter', 'sotest 报告服务')
    .addServer(selfConfig.origin)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  const httpAdapter = app.getHttpAdapter()
  httpAdapter.use('/api/swagger', (req, res) => {
    res.json(document)
  })

  await app.listen(selfConfig.port, selfConfig.host)
}

export default bootstrap
