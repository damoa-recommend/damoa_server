import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { MoviesModule} from './movies/movies.module'
import { configService } from './config/configService'

import { Movie } from './movies/schema/movie.schema'

const entities = [Movie]

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...configService.getTypeOrmConfig(), 
      entities
    }),
    MoviesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
