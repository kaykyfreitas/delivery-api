import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
  async execute(id_customer: string) {
    const deliveries = await prisma.customer.findMany({
      where: {
        id: id_customer,
      },
      select: {
        id: true,
        username: true,
        delivery: true,
      },
    });

    return deliveries;
  }
}
