import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Delete all the lists associated with that board
export const deleteNullLists = async () => await prisma.list.deleteMany({ where: { boardId: null } });
// Delete all the cards associated with those lists
export const deleteNullCards = async () => await prisma.card.deleteMany({ where: { listId: null } });
// Delete all the comments associated with those cards
export const deleteNullComments = async () => await prisma.comment.deleteMany({ where: { cardId: null } });
// Delete all the attachements associated with those cards
export const deleteNullAttachement = async () =>  await prisma.attachment.deleteMany({ where: { cardId: null } });
// Delete all the labels associated with those cards
export const deleteNullLabels = async () =>  await prisma.label.deleteMany({ where: { cardId: null } });
