"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const child_controllers_1 = require("../controllers/child.controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.authMiddleware, child_controllers_1.createChild);
router.get('/:familyId', auth_middleware_1.authMiddleware, child_controllers_1.getChildrenByFamily);
exports.default = router;
//# sourceMappingURL=child.routes.js.map