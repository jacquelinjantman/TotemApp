"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const family_member_controller_1 = require("../controllers/family-member.controller");
const router = (0, express_1.Router)();
router.post('/', family_member_controller_1.createMember);
router.get('/:familyId', family_member_controller_1.getMembers);
exports.default = router;
//# sourceMappingURL=family-member.routes.js.map