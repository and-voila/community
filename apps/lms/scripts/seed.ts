// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Computer Science' },
        { name: 'Music' },
        { name: 'Fitness' },
        { name: 'Photography' },
        { name: 'Accounting' },
        { name: 'Engineering' },
        { name: 'Filming' },
      ],
    });

    // eslint-disable-next-line no-console
    console.log('Success');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error seeding the database categories', error);
  } finally {
    await database.$disconnect();
  }
}

main();
