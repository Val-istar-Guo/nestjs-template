import Pika from '@miaooo/pika'


export const env = new Pika(process.env.NODE_ENV, {
  prod: value => value === 'prod' || value === 'production',
  test: value => value === 'test',
  dev: value => value === 'dev' || value === 'development',
  local: value => value === 'local',
})
