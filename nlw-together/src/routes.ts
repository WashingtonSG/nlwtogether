import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ComplimentController } from "./controllers/CreateComplimentController";
import { ensureAutenticated } from "./middlewares/ensureAutenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router()

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new ComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post(
    "/tags",
    ensureAutenticated,
    ensureAdmin,
    createTagController.handle
    )

router.get("/tags", ensureAutenticated, listTagsController.handle)

router.post("/users", createUserController.handle);
router.get("/users", ensureAutenticated, ensureAdmin, listUsersController.handle);
router.post("/login", authenticateUserController.handle);

router.post(
    "/compliments",
    ensureAutenticated,
    complimentController.handle
    );

router.get("/users/compliments/send", ensureAutenticated, listUserReceiveComplimentsController.handle)
router.get("/users/compliments/receive", ensureAutenticated, listUserSendComplimentsController.handle)



export { router }