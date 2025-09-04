import { Router } from "express";
import userRouter from "./UserRoutes"
import IngredientRouter from "./IngredientRoutes"
import FoodRestrictionRouter  from "./FoodRestrictionRoute";

const router = Router();

router.use('/users', userRouter)
router.use('/ingredient', IngredientRouter)
router.use('/foodrestriction', FoodRestrictionRouter)

export default router

