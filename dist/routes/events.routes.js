"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controllers_1 = require("../controllers/event.controllers");
const event_controllers_2 = require("../controllers/event.controllers");
const event_controllers_3 = require("../controllers/event.controllers");
const event_controllers_4 = require("../controllers/event.controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.authMiddleware, event_controllers_1.createEvent);
router.get('/:familyId', auth_middleware_1.authMiddleware, event_controllers_2.getEventsByFamily);
router.patch('/:id', auth_middleware_1.authMiddleware, event_controllers_3.updateEvent);
router.delete('/:id', auth_middleware_1.authMiddleware, event_controllers_4.deleteEvent);
exports.default = router;
//# sourceMappingURL=events.routes.js.map