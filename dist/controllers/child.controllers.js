"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildrenByFamily = exports.createChild = void 0;
const db_1 = __importDefault(require("../config/db"));
const createChild = async (req, res) => {
    const { name, birthdate, schoolName, doctorName, familyId } = req.body;
    if (!name || !birthdate || !familyId) {
        res.status(400).json({ error: 'Faltan campos requeridos' });
        return;
    }
    const child = await db_1.default.child.create({
        data: {
            name,
            birthdate: new Date(birthdate),
            schoolName,
            doctorName,
            familyId
        }
    });
    res.status(201).json(child);
};
exports.createChild = createChild;
const getChildrenByFamily = async (req, res) => {
    const familyId = req.params.familyId;
    const children = await db_1.default.child.findMany({
        where: { familyId },
        include: { family: true }
    });
    res.json(children);
};
exports.getChildrenByFamily = getChildrenByFamily;
//# sourceMappingURL=child.controllers.js.map