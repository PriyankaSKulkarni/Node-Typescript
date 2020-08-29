import { IController } from "../Interfaces/IController";

import { IHttpServer } from "../Interfaces/IHttpServer";

import { Request, Response, Next } from "restify";

import * as jwt from 'jsonwebtoken';

import { CONFIG } from '../config/config';



export class HomeController implements IController {

    initialize(httpServer: IHttpServer): void {

        httpServer.get('/auth', this.generateToken.bind(this));

    }

    private async generateToken(req: Request, res: Response): Promise<void> {

        var user = {

            id: 1,

            name: "bhavesh"

        };



        var options = {

            expiresIn: "30s"

        };



        jwt.sign(user, CONFIG.JWT_SECRET, options, (err, token) => {

            res.json({

                token

            });

        });

    }
}