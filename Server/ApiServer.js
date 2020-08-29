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
exports.ApiServer = void 0;
const restify = require("restify");
const ControllerRegister_1 = require("../Controllers/ControllerRegister");
const config_1 = require("../config/config");
const rjwt = require("restify-jwt-community");
class ApiServer {
    get(url, requestHandler) {
        this.addRoute('get', url, requestHandler);
    }
    post(url, requestHandler) {
        this.addRoute('post', url, requestHandler);
    }
    put(url, requestHandler) {
        this.addRoute('put', url, requestHandler);
    }
    del(url, requestHandler) {
        this.addRoute('del', url, requestHandler);
    }
    //Routing 
    addRoute(method, url, requestHandler) {
        this.restify[method](url, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield requestHandler(req, res, next);
            }
            catch (e) {
                console.log(e);
                res.send(500, e);
            }
        }));
        console.log(`Added route ${method.toUpperCase()} ${url}`);
    }
    start(port) {
        this.restify = restify.createServer(); // server created 
        this.restify.use(restify.plugins.bodyParser()); // Used to read data from request body 
        this.restify.use(restify.plugins.queryParser()); // Used to read data from query string 
        ControllerRegister_1.CONTROLLERS.forEach(controller => controller.initialize(this));
        this.restify.listen(port, () => console.log(`Server is up and running on port ${port}`));
        this.restify.use(rjwt({ secret: config_1.CONFIG.JWT_SECRET }).unless({ path: ['/auth'] }));
    }
}
exports.ApiServer = ApiServer;
//# sourceMappingURL=ApiServer.js.map