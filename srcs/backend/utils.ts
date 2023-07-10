import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => 
{
    await prisma.board.deleteMany();
    await prisma.user.deleteMany();
}

main();