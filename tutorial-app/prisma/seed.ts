/* eslint-disable no-console */
import { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const password = await hash("pass", 12);

  const user = await prisma.user.create({
    data: {
      name: "Aiden",
      email: "lionstar259007@gmail.com",
      password: password,
    } as Prisma.UserUncheckedCreateInput,
  });
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
