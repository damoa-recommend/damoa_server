import { Controller, Get, Query, Request, Response } from '@nestjs/common';
import { MoviesService } from './movies.service'

@Controller('/movie')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService
  ) {}

  @Get('/')
  async getMovies (
    @Query('page') page: Number,
    @Query('cntOfPage') cntOfPage: Number,
    @Query('category') category: Number,
    @Response() res
  ) {
    
    return res.status(200).json({
      code: '0000',
      data: await this.moviesService.findAll({
        page: page || 1, 
        cntOfPage: cntOfPage || 15, 
      }, {
        category: category || 'ALL'
      })
    })
  }

  @Get('/detail')
  async getMovie (
    @Query('productNo') productNo: String,
    @Response() res
  ) {
    return res.status(200).json({
      code: '0000',
      data: await this.moviesService.findOneByProductId(productNo)
    })
  }
}