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
            res.send(this.getPolicyData());
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const policy = yield this.getPolicyData().find(x => x.id == req.params.id);
            res.send(policy ? 200 : 404, policy);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getPolicyData() {
        var policies = [];
        policies.push({ id: 1, policynumber: "7876322", policyholdername: "ABC", isactive: false });
        policies.push({ id: 2, policynumber: "7876323", policyholdername: "PQR", isactive: true });
        policies.push({ id: 3, policynumber: "7876324", policyholdername: "XYZ", isactive: true });
        return policies;
    }
}
exports.PolicyController = PolicyController;
//# sourceMappingURL=PolicyController.js.map