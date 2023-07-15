import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const comment = await prisma.comment.create({
    data: {
      content: "Hello comment",
      card: {
        connect: { id: "3e28d06a-0ab8-4e22-bc01-f99b9f0ad340" },
      },
      user: {
        connect: { id: "e613913b-f7f3-4aab-a0c7-fe8499faf08a" },
      },
    },
  });
  console.log(comment);
};

main();
