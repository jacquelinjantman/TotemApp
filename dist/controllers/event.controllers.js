"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.getEventsByFamily = exports.createEvent = void 0;
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
const updateEvent = async (req, res) => {
    const id = req.params.id;
    const { title, type, startsAt, location, assignedTo } = req.body;
    const event = await db_1.default.event.update({
        where: { id },
        data: {
            title,
            type,
            startAt: startsAt ? new Date(startsAt) : undefined,
            location,
            assignedTo,
        }
    });
    res.json(Event);
};
exports.updateEvent = updateEvent;
const deleteEvent = async (req, res) => {
    const id = req.params.id;
    try {
        await db_1.default.event.delete({ where: { id } });
        res.json({ message: 'evento eliminado' });
    }
    catch {
        res.status(404).json({ error: 'el evento no exite' });
    }
};
exports.deleteEvent = deleteEvent;
//# sourceMappingURL=event.controllers.js.map