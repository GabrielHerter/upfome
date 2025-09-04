import { Router } from "express";
import { FoodRestrictionController } from "src/controllers/FoodRestrictionController";
import { FoodRestriction } from "src/entities/FoodRestriction";

const router = Router();

router.post('/foodrestriction/:userId/:ingredientId', FoodRestrictionController.create)

export default Router

/*metodo pra um usuario q eu passa lista todas as restricoes dele*/