import express from "express";
import { createProducts, deleteProducts, getProducts, getProductsbyID, updateProducts } from "../Controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/" , createProducts);
productRouter.get("/" , getProducts);

productRouter.put("/:productId" , updateProducts);
productRouter.delete("/:productId" , deleteProducts);
productRouter.get("/:productId" , getProductsbyID);

export default productRouter;