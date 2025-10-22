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
        magictypeId: 1,
        imageurl: "https://www.reddit.com/r/LostMinesOfPhandelver/comments/15ikb6v/daran_edermath/?tl=es-419",
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
        magictypeId: 5,
        imageurl: "https://i.pinimg.com/736x/6c/d6/0a/6cd60ab760dafb1aaac87bf114e7f157.jpg"
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
        magictypeId: 4,
        imageurl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtEBiWidINVCqzdPtjryMlM92OftHJPJYvUT7i9IcMmEaVhjXd0JdqRU6bfrvheiuNij9yUm7xX9v5LVO69Jn15Zzctk9xmqNYw5QkfWgMUjOy2F3pf-and1pmUfSVG1OV_hGCHjLf-d0/s1600/quori.jpg"
        },
        ]
    })
    console.log('Datos insertados en la base de datos.')
}

main()
    .catch((e) => console.error(e))
    .finally(async() => await prisma.$disconnect());

