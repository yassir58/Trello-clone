import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const card = await prisma.card.findUnique({
    where: {
      id: undefined,
    },
  });
  console.log(card);
};

main();
