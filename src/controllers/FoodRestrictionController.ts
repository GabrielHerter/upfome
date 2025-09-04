import { Request, Response } from "express";
import { AppDataSource } from "src/config/datasource";
import { FoodRestriction } from "src/entities/FoodRestriction";
import { Ingredient } from "src/entities/Ingredients";
import { User } from "src/entities/User";


const repo = () => AppDataSource.getRepository(FoodRestriction)
const userRepo = () => AppDataSource.getRepository(User)
const ingredientRepo = () => AppDataSource.getRepository(Ingredient)

export class FoodRestrictionController {

    static async create(req:  Request, res: Response) {
        const  level  = req.body.level
        const { userId, ingredientId } = req.params

        try {
            const user = await userRepo().findOneBy({"id": Number(userId)})
            const ingredient = await userRepo().findOneBy({"id": Number(ingredientId)})
            
            if ( !user  || ! ingredient){
                res.status(400).send("User or ingredient not found")
            }

            const foodRestriction = repo().create({
                "user": user,
                "ingredient": ingredient,
                "level": Number(level)
            })
            const result = repo().save(foodRestriction)
            res.status(201).send("Food Restriction created")
        } catch (error) {
            res.status(500).send("Contact your sistem admin")
        }

        try {
            const createdIngredient = repo().create({ level })
            await repo().save(createdIngredient)
            res.status(201).send("Ingredient created!")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error while creating new ingredient")
        }

    }
}

