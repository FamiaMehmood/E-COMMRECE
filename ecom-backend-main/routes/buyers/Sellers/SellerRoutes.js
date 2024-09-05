import express from "express";
import { registerSeller } from "../../controllers/Sellers/sellerControllers.js";
const buyerRouter = express.Router();

buyerRouter.post("/register", registerSeller)

export default SellerRouter;