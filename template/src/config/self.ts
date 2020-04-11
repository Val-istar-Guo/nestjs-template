import { env } from '@/utils/env'
import os from 'os'

function getIP(): string {
  const ifaces = os.networkInterfaces();
  let ip = '127.0.0.1'

  for (const ifinfo of Object.values(ifaces)) {
    if (!ifinfo) continue

    ifinfo.forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      ip = iface.address
    });
  }

  return ip
}



export const port = env.switch({
  priority: process.env.PORT && Number(process.env.PORT),
  default: 8080,
})
export const host = env.switch({
  priority: process.env.HOST,
  default: '0.0.0.0',
})

export const origin = env.switch({
  priority: process.env.ORIGIN,
  local: `http://${getIP()}:${port}`,
  default: 'http://sotest-report-dev.dev.paas-dev.sheincorp.cn'
})