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
exports.DatabaseProvider = void 0;
const typeorm_1 = require("typeorm");
const Policy_1 = require("../Data/Entities/Policy");
class DatabaseProvider {
    static configure(config) {
        try {
            DatabaseProvider.configuration = config;
        }
        catch (e) {
            console.log(e);
        }
    }
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (DatabaseProvider.connection) {
                return DatabaseProvider.connection;
            }
            try {
                const { type, host, port, username, password, database, ssl } = DatabaseProvider.configuration;
                DatabaseProvider.connection = yield typeorm_1.createConnection({
                    type, host, port, username, password, database,
                    extra: {
                        ssl
                    },
                    entities: [
                        Policy_1.Policy
                    ],
                    autoSchemaSync: true
                });
            }
            catch (e) {
                console.log(e);
            }
            return DatabaseProvider.connection;
        });
    }
}
exports.DatabaseProvider = DatabaseProvider;
//# sourceMappingURL=DatabaseProvider.js.map