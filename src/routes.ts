import { Router } from "express";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateCustomerController } from "./modules/customer/useCase/createCustomer/CreateCustomerController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateCustomerController = new AuthenticateCustomerController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/customer", createCustomerController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/customer/auth", authenticateCustomerController.handle);

routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);

export { routes }