// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Acquisition' },
        { name: 'AI' },
        { name: 'Business' },
        { name: 'Content' },
        { name: 'Design' },
        { name: 'Expansion' },
        { name: 'Marketing' },
        { name: 'Operations' },
        { name: 'Productivity' },
        { name: 'Retention' },
        { name: 'Social Media' },
        { name: 'Technology' },
        { name: 'Tools' },
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
