import { Controller, Get, Param } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  // @Get("/:id")
  // find(@Param('id') id: number){
  //   return typeof(id)
  // }
}
