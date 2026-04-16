"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsByFamily = exports.createEvent = void 0;
const db_1 = __importDefault(require("../config/db"));
const createEvent = async (req, res) => {
    const { title, type, startAt, location, assignedTo, childId, familyId } = req.body;
    if (!title || !type || !startAt || !familyId) {
        res.status(400).json({ error: 'Faltan campos requeridos' });
        return;
    }
    const NewEvent = await db_1.default.event.create({
        data: {
            title,
            type,
            startAt: new Date(startAt),
            location,
            assignedTo,
            childId,
            familyId
        }
    });
    res.status(201).json(NewEvent);
};
exports.createEvent = createEvent;
const getEventsByFamily = async (req, res) => {
    const familyId = req.params.familyId;
    const events = await db_1.default.event.findMany({
        where: { familyId },
        include: { child: true },
        orderBy: { startAt: 'asc' }
    });
    res.json(events);
};
exports.getEventsByFamily = getEventsByFamily;
//# sourceMappingURL=event.controllers.js.map