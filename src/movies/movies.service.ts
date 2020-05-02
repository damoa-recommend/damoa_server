import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Movie } from './schema/movie.schema'

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private readonly movieRepo: Repository<Movie>
  ) { }

  async findAll({page, cntOfPage}, filter) {
    return await this.movieRepo.find({
      order: { id: "ASC" },
      take: cntOfPage,
      skip: (page - 1) * cntOfPage,
      where: filter 
    })
  }

  async findOneByProductId(pn) {
    return await this.movieRepo.findOne(pn) || {}
  }
}