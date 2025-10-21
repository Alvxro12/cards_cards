import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CardsController],
  providers: [CardsService, PrismaClient],
})
export class CardsModule {}
