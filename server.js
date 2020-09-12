"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiServer_1 = require("../PolicyNodeApi/Server/ApiServer");
const DatabaseProvider_1 = require("../PolicyNodeApi/Data/DatabaseProvider");
const log4js = require("log4js");
const server = new ApiServer_1.ApiServer();
server.start(+process.env.PORT || 8000);
log4js.configure('./log4js.json');
var log = log4js.getLogger("startup");
log.info('server is started');
DatabaseProvider_1.DatabaseProvider.configure({
    type: process.env.DATABASE_TYPE || 'mysql',
    database: process.env.DATABASE_NAME || 'insurance',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'admin',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: +process.env.DATABASE_PORT || 3306,
    ssl: !!process.env.USE_SSL
});
//# sourceMappingURL=server.js.map