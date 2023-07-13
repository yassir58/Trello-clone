import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const board = await prisma.board.update({
    where: {
      id: "8ea28ace-9c94-47ea-921a-aa8a35d16d3c",
    },
    data: {
      users: {
        connect: {
          id: "6113a62b-c1a9-45dc-bded-457328457fb0",
        },
      },
    },
  });
  console.log(board);
};

main();
