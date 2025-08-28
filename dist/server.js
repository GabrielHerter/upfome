"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const datasource_1 = require("./config/datasource");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
async function start() {
    try {
        await datasource_1.AppDataSource.initialize();
        app_1.default.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    }
    catch (err) {
        console.error('Falha ao iniciar a aplicação:', err);
        process.exit(1);
    }
}
start();
