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
exports.PolicyController = void 0;
const PolicyService_1 = require("../Services/PolicyService");
class PolicyController {
    initialize(httpServer) {
        httpServer.get('/policy', this.list.bind(this));
        httpServer.get('/policy/:id', this.getById.bind(this));
        httpServer.put('/policy', this.update.bind(this));
        httpServer.post('/policy', this.create.bind(this));
        httpServer.del('/policy/:id', this.remove.bind(this));
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield PolicyService_1.policyService.list());
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const policyModel = yield PolicyService_1.policyService.getById(req.params.id);
            res.send(policyModel ? 200 : 404, policyModel);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield PolicyService_1.policyService.update(req.body));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield PolicyService_1.policyService.create(req.body));
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield PolicyService_1.policyService.delete(req.params.id));
        });
    }
}
exports.PolicyController = PolicyController;
//# sourceMappingURL=PolicyController.js.map