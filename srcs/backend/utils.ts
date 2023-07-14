import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const board = await prisma.board.update({
    where: {
      id: "c1ee403d-31d0-4eda-800b-c04825a15b6b",
    },
    data: {
      users: {
        connect: {
          id: "68aa460f-d52d-4383-a06f-f4835675eb6e",
        },
      },
    },
  });
  console.log(board);
};

main();
