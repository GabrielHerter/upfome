import {Router} from "express";
import { IngredientController } from "src/controllers/IngredientsController";

const router = Router();

router.get('/', IngredientController.getAll)
router.post('/', IngredientController.create)
router.put('/:id', IngredientController.update)
router.delete('/:id', IngredientController.delete)
router.get('/:id', IngredientController.select)

export default router
