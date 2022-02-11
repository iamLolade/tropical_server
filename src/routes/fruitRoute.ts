import express from "express";
import { addFruit, getFruits } from "../controller/fruitController";

const router = express.Router();

//Get Request
router.get("/fruit", getFruits)

//Post Request
router.post("/fruit", addFruit)

//Delete Request
router.delete("/:id/fruit", )

export default router;