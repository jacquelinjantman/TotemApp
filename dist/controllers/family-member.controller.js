"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMember = exports.getMembers = exports.createMember = void 0;
const db_1 = __importDefault(require("../config/db"));
const createMember = async (req, res) => {
    const { displayName, role, familyId } = req.body;
    if (!displayName || !role || !familyId) {
        res.status(400).json({ error: 'Faltan campos requeridos' });
        return;
    }
    const member = await db_1.default.familyMember.create({
        data: {
            displayName,
            role,
            familyId
        }
    });
    res.status(201).json(member);
};
exports.createMember = createMember;
const getMembers = async (req, res) => {
    const { familyId } = req.params.familyId;
    const members = await db_1.default.familyMember.findMany({
        where: { familyId }
    });
    res.json(members);
};
exports.getMembers = getMembers;
const deleteMember = async (req, res) => {
    const { id } = req.query;
    try {
        await db_1.default.familyMember.delete({
            where: { id: id }
        });
        res.json({ message: "Usuario eliminado correctamente" });
    }
    catch (error) {
        res.status(404).json({ error: "El usuario no existe" });
    }
};
exports.deleteMember = deleteMember;
//# sourceMappingURL=family-member.controller.js.map