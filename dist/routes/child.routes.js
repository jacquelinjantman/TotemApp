"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const child_controllers_1 = require("../controllers/child.controllers");
const router = (0, express_1.Router)();
router.post('/', child_controllers_1.createChild);
router.get('/:familyId', child_controllers_1.getChildrenByFamily);
exports.default = router;
//# sourceMappingURL=child.routes.js.map