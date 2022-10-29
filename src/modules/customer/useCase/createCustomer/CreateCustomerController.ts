import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {

    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const createCustomerUseCase= new CreateCustomerUseCase();

        const result = await createCustomerUseCase.execute({ username, password });

        return response.json(result);
    }

}