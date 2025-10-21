export class CreateCardDto {
    name: string;
    description: string;
    typeId: number;
    rarityId: number;
    regionId: number;
    magictypeId: number; 
    power: number;
    defense: number;
    armor: number;
    health: number;
}