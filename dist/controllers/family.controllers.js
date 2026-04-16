"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFamilies = exports.createFamily = void 0;
const db_1 = __importDefault(require("../config/db"));
const createFamily = async (req, res) => {
    try {
        const { name } = req.body;
        console.log('Creando familia con nombre:', req.body);
        const newFamily = await db_1.default.family.create({
            data: { name }
        });
        return res.status(201).json(newFamily);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la familia' });
    }
};
exports.createFamily = createFamily;
const getFamilies = async (req, res) => {
    const families = await db_1.default.family.findMany({
        include: { members: true, children: true }
    });
    res.json(families);
};
exports.getFamilies = getFamilies;
//# sourceMappingURL=family.controllers.js.map