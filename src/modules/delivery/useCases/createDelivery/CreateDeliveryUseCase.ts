import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  id_customer: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_customer }: ICreateDelivery) {
    const delivery = await prisma.delivery.create({
      data: {
        item_name,
        id_customer,
      },
    });

    return delivery;
  }
}
