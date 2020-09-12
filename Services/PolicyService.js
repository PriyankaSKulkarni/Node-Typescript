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
exports.policyService = exports.PolicyService = void 0;
const Policy_1 = require("../Data/Entities/Policy");
const DatabaseProvider_1 = require("../Data/DatabaseProvider");
class PolicyService {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield DatabaseProvider_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(Policy_1.Policy).findOneOrFail(id);
        });
    }
    create(policy) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPolicy = new Policy_1.Policy();
            newPolicy.policynumber = policy.policynumber;
            newPolicy.policyholdername = policy.policyholdername;
            newPolicy.isactive = policy.isactive;
            const connection = yield DatabaseProvider_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(Policy_1.Policy).save(newPolicy);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield DatabaseProvider_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(Policy_1.Policy).find();
        });
    }
    update(policy) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(policy);
            const connection = yield DatabaseProvider_1.DatabaseProvider.getConnection();
            const repository = connection.getRepository(Policy_1.Policy);
            const entity = yield repository.findOneOrFail(policy.id);
            entity.policynumber = policy.policynumber;
            entity.policyholdername = policy.policyholdername;
            entity.isactive = policy.isactive;
            return yield repository.save(entity);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield DatabaseProvider_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(Policy_1.Policy).delete(id);
        });
    }
}
exports.PolicyService = PolicyService;
exports.policyService = new PolicyService();
//# sourceMappingURL=PolicyService.js.map