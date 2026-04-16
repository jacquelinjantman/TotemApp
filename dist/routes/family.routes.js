"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const family_controllers_1 = require("../controllers/family.controllers");
const router = (0, express_1.Router)();
router.post('/', family_controllers_1.createFamily);
router.get('/', family_controllers_1.getFamilies);
exports.default = router;
//# sourceMappingURL=family.routes.js.map