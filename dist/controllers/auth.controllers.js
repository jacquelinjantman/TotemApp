"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../config/db"));
const register = async (req, res) => {
    const { email, password, familyId } = req.body;
    if (!email || !password || !familyId) {
        res.status(400).json({ error: 'Faltan campos requeridos' });
        return;
    }
    const hashdPassword = await bcryptjs_1.default.hash(password, 10);
    const user = await db_1.default.user.create({
        data: { email, password: hashdPassword, familyId }
    });
    res.status(201).json({ id: user.id, email: user.email });
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Faltan datos requeridos' });
        return;
    }
    const user = await db_1.default.user.findUnique({ where: { email } });
    if (!user) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;
    }
    const validPassword = await bcryptjs_1.default.compare(password, user.password);
    if (!validPassword) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id, familyId: user.familyId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
};
exports.login = login;
//# sourceMappingURL=auth.controllers.js.map