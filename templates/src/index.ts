import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app-module'
import { ValidationPipe } from '@nestjs/common'
import * as SELF from '@/config/self'
import '@/config'
import morgan from 'morgan'
import { enhance } from './enhance'


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.use(morgan('tiny'))
  enhance(app)

  const builder = new DocumentBuilder()
    .setTitle(SELF.title)
    .setVersion(SELF.version)
    .addServer(SELF.origin)

  for (const tag of SELF.tags) {
    builder.addTag(tag.name, tag.description)
  }

  const options = builder.build()
  const document = SwaggerModule.createDocument(app, options)
  const httpAdapter = app.getHttpAdapter()
  httpAdapter.use('/api/swagger', (req, res) => {
    res.json(document)
  })

  await app.listen(SELF.port, SELF.host)
}

export default bootstrap
