"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controllers_1 = require("../controllers/event.controllers");
const event_controllers_2 = require("../controllers/event.controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.authMiddleware, event_controllers_1.createEvent);
router.get('/:familyId', auth_middleware_1.authMiddleware, event_controllers_2.getEventsByFamily);
exports.default = router;
//# sourceMappingURL=events.routes.js.map