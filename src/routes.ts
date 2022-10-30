import { Router } from "express";
import { ensureAuthenticateCustomer } from "./middleware/ensureAuthenticateCustomer";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliveryman";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateCustomerController } from "./modules/customer/useCase/createCustomer/CreateCustomerController";
import { FindAllDeliveriesController } from "./modules/customer/useCase/findAllDeliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/delivery/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/delivery/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/delivery/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateCustomerController = new AuthenticateCustomerController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesCustomerController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/customer", createCustomerController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/customer/auth", authenticateCustomerController.handle);

routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateCustomer, createDeliveryController.handle);

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

routes.get("/customer/deliveries", ensureAuthenticateCustomer, findAllDeliveriesCustomerController.handle);

routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);

routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes }