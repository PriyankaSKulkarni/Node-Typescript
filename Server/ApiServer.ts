import { IHttpServer } from '../Interfaces/IHttpServer';

import { RequestHandler, Server } from 'restify';

import * as restify from 'restify';

import { CONTROLLERS } from '../Controllers/ControllerRegister'; 

import { CONFIG } from '../config/config';

import * as rjwt from 'restify-jwt-community'; 



export class ApiServer implements IHttpServer {

    public restify: Server;



    get(url: string, requestHandler: RequestHandler): void {

        this.addRoute('get', url, requestHandler);

    }

    post(url: string, requestHandler: RequestHandler): void {

        this.addRoute('post', url, requestHandler);

    }

    put(url: string, requestHandler: RequestHandler): void {

        this.addRoute('put', url, requestHandler);

    }

    del(url: string, requestHandler: RequestHandler): void {

        this.addRoute('del', url, requestHandler);

    }

    //Routing 

    private addRoute(method: 'get' | 'post' | 'put' | 'del', url: string, requestHandler: RequestHandler): void {

        this.restify[method](url, async (req, res, next) => {

            try {

                await requestHandler(req, res, next);

            }

            catch (e) {

                console.log(e);

                res.send(500, e);

            }

        });

        console.log(`Added route ${method.toUpperCase()} ${url}`);

    }



    public start(port: number): void {

        this.restify = restify.createServer(); // server created 

        this.restify.use(restify.plugins.bodyParser()); // Used to read data from request body 

        this.restify.use(restify.plugins.queryParser()); // Used to read data from query string 

        CONTROLLERS.forEach(controller => controller.initialize(this));

        this.restify.listen(port, () => console.log(`Server is up and running on port ${port}`));

        this.restify.use(rjwt({ secret: CONFIG.JWT_SECRET }).unless({ path: ['/auth'] })); 

    }



} 