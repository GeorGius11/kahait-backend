// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample quizzes
  const quiz1 = await prisma.quiz.create({
    data: {
      title: 'General Knowledge Quiz',
      description: 'Test your general knowledge with this quiz.',
      questions: {
        create: [
          {
            title: 'What is the capital of France?',
            answers: {
              create: [
                { text: 'Paris', isCorrect: true },
                { text: 'London', isCorrect: false },
                { text: 'Rome', isCorrect: false },
              ],
            },
          },
          {
            title: 'Which planet is known as the Red Planet?',
            answers: {
              create: [
                { text: 'Mars', isCorrect: true },
                { text: 'Venus', isCorrect: false },
                { text: 'Jupiter', isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz2 = await prisma.quiz.create({
    data: {
      title: 'Science Quiz',
      description: 'A quiz to challenge your science knowledge.',
      questions: {
        create: [
          {
            title: 'What is the chemical symbol for water?',
            answers: {
              create: [
                { text: 'H2O', isCorrect: true },
                { text: 'CO2', isCorrect: false },
                { text: 'O2', isCorrect: false },
              ],
            },
          },
          {
            title: 'What gas do plants absorb from the atmosphere?',
            answers: {
              create: [
                { text: 'Oxygen', isCorrect: false },
                { text: 'Carbon Dioxide', isCorrect: true },
                { text: 'Nitrogen', isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('Seed data created:', { quiz1, quiz2 });
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
