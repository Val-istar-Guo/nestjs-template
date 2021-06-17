import { INestApplication } from '@nestjs/common'


export function enhance(app: INestApplication): void {
  app.enableCors()
}
