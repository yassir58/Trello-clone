import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => 
{
    await prisma.user.deleteMany();
    await prisma.board.deleteMany();
}

main();