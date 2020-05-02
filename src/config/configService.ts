import { TypeOrmModuleOptions } from '@nestjs/typeorm'

require('dotenv').config()

const c = {
  develop: {
    mysql: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'MovieRecommend',
      synchronize: false,
      logging: true,
      entities: ['**/*/*.schema{.ts,.js}'],
      insecureAuth : true
    }
  }
}

class ConfigService {
  constructor (private readonly mode) {
    console.log('[CALL] ConfigService')
    console.log(`[MODE] App mode: ${mode}`)
  } 

  getTypeOrmConfig() {
    console.log(`[CONFIG] TypeOrm(MySQL)`)
    console.log(c[this.mode].mysql)
    return c[this.mode].mysql
  }
}

const configService = new ConfigService(process.env.MODE)

export { configService }