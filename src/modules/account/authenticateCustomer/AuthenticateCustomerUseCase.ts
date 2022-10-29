import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateCustomer {
    username: string,
    password: string;
}
export class AuthenticateCustomerUseCase {

    async execute({ username, password }: IAuthenticateCustomer) {

        const customer = await prisma.customer.findFirst({
            where: {
                username
            }
        });

        if(!customer) 
            throw new Error("Username or password invalid!");
        
        const passwordMatch = await compare(password, customer.password);

        if(!passwordMatch)
            throw new Error("Username or password invalid!");

        const token = sign({ username }, "604e2733b5ccaa0c8668e1f63afb0498", {
            subject: customer.id,
            expiresIn: "1d"
        });

        return token;
    }

}