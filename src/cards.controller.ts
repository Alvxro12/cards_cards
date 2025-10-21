import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Put } from '@nestjs/common';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateCardDto) {
    return this.cardsService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.delete(Number(id));
  }

  @Put(':id')
update(@Param('id') id: string, @Body() dto: CreateCardDto) {
  return this.cardsService.update(Number(id), dto);
}
}

