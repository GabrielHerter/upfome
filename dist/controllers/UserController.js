"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const datasource_1 = require("src/config/datasource");
const user_1 = require("src/entities/user");
const repo = () => datasource_1.AppDataSource.getRepository(user_1.User);
class UserController {
    static async getAll(req, res) {
        const users = await repo().find({ order: { name: "ASC" } });
        res.status(200).json(users);
    }
}
exports.UserController = UserController;
