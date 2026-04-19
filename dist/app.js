"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const family_routes_1 = __importDefault(require("./routes/family.routes"));
const family_member_routes_1 = __importDefault(require("./routes/family-member.routes"));
const child_routes_1 = __importDefault(require("./routes/child.routes"));
const events_routes_1 = __importDefault(require("./routes/events.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('¡Bienvenido a MomApp!');
});
app.use('/families', family_routes_1.default);
app.use('/members', family_member_routes_1.default);
app.use('/children', child_routes_1.default);
app.use('/events', events_routes_1.default);
app.use('/auth', auth_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map