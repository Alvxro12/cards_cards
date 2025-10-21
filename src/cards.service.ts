import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.card.findMany({
      include: {
        region: true,
        type: true,
        magictype: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.card.findUnique({
      where: { id },
      include: {
        region: true,
        type: true,
        magictype: true,
      },
    });
  }

  async create(data: CreateCardDto) {
    return this.prisma.card.create({
      data: {
        name: data.name,
        description: data.description,
        typeId: data.typeId,
        rarityId: data.rarityId,
        regionId: data.regionId,
        magictypeId: data.magictypeId,
        power: data.power,
        defense: data.defense,
        armor: data.armor,
        health: data.health,
      },
  });
}


  async delete(id: number) {
    return this.prisma.card.delete({ where: { id } });
  }

  async update(id: number, data: CreateCardDto) {
  return this.prisma.card.update({
    where: { id },
    data,
  });
}
}

