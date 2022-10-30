import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateCustomer {
  username: string;
  password: string;
}

export class CreateCustomerUseCase {
  async execute({ username, password }: ICreateCustomer) {
    const customerExists = await prisma.customer.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (customerExists) throw new Error("Customer already exists!");

    const hashPassword = await hash(password, 10);

    const customer = await prisma.customer.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return customer;
  }
}
