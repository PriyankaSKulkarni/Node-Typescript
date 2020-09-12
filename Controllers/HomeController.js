"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const jwt = require("jsonwebtoken");
const config_1 = require("../config/config");
class HomeController {
    initialize(httpServer) {
        httpServer.get('/auth', this.generateToken.bind(this));
    }
    generateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = {
                id: 1,
                name: "bhavesh"
            };
            var options = {
                expiresIn: "60s"
            };
            jwt.sign(user, config_1.CONFIG.JWT_SECRET, options, (err, token) => {
                res.json({
                    token
                });
            });
        });
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map