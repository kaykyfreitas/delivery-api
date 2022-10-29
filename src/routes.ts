import { Router } from "express";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { CreateCustomerController } from "./modules/customer/useCase/createCustomer/CreateCustomerController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const authenticateCustomerController = new AuthenticateCustomerController();

routes.post("/customer", createCustomerController.handle);

routes.post("/customer/auth", authenticateCustomerController.handle);

export { routes }