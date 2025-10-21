import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // --- Regiones ---
    const regions = await prisma.region.createMany({
    data: [
        { name: 'All World' },
        { name: 'Avalon' },
        { name: 'Qerovaria Dynasty' },
        { name: 'Kharun' },
        { name: 'Palmor' },
        { name: 'Vaerys Kingdom' },
    ],
});

    const types = await prisma.cardType.createMany({
        data: [
            {name: 'Warrior'},
            {name: 'Mage'},
            {name: 'Archer'},
            {name: 'Support'},
        ]
    })

    const rarity = await prisma.rarity.createMany({
        data:[
            {name: 'Common'},
            {name: 'Rare'},
            {name: 'Epic'},
            {name: 'Legendary'},
        ]
    })

    const magictypes = await prisma.magictype.createMany({
        data:[
            {name: 'None'},
            {name: 'Fire'},
            {name: 'Water'},
            {name: 'earth'},
            {name: 'Air'},
        ]
    })

    await prisma.card.createMany({
        data:[
            {
        name: 'Aldren el Errante',
        description: 'Un espadachín perteneciente a Vaerys Kigndom que recorre los caminos buscando redención.',
        power: 75,
        defense: 60,
        armor: 40,
        health: 60,
        regionId: 6,
        typeId: 1,
        rarityId: 2,
        magictypeId: 1
        },
        
        {
        name: 'Lyra de los bosques',
        description: 'Hechicera de Avalon que controla la energía del aire.',
        power: 90,
        defense: 35,
        armor: 20,
        health: 80,
        regionId: 2,
        typeId: 2,
        rarityId: 1,
        magictypeId: 5
        },

        {
        name: 'kaerius el indomable',
        description: 'Un gigante perteneciente a las tierras salvajes de Palmor.',
        power: 80,
        defense: 70,
        armor: 60,
        health: 700,
        regionId: 5,
        typeId: 1,
        rarityId: 3,
        magictypeId: 4
        },
        ]
    })
    console.log('Datos insertados en la base de datos.')
}

main()
    .catch((e) => console.error(e))
    .finally(async() => await prisma.$disconnect());

