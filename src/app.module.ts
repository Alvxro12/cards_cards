import { Module } from '@nestjs/common';
import { CardsModule } from './cards.module';

@Module({
  imports: [CardsModule],
})
export class AppModule {}
