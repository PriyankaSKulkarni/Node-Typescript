import { IController } from '../Interfaces/IController';

import { IHttpServer } from '../Interfaces/IHttpServer';

import { Request, Response } from 'restify';

import { policyService } from '../Services/PolicyService';



export class PolicyController implements IController {

    initialize(httpServer: IHttpServer): void {

        httpServer.get('/policy', this.list.bind(this));

        httpServer.get('/policy/:id', this.getById.bind(this));

        httpServer.put('/policy', this.update.bind(this));

        httpServer.post('/policy', this.create.bind(this));

        httpServer.del('/policy/:id', this.remove.bind(this));

    }



    private async list(req: Request, res: Response): Promise<void> {

        res.send(await policyService.list());

    }

    private async getById(req: Request, res: Response): Promise<void> {

        const policyModel = await policyService.getById(req.params.id);

        res.send(policyModel ? 200 : 404, policyModel);

    }

    private async update(req: Request, res: Response): Promise<void> {

        res.send(await policyService.update(req.body));

    }

    private async create(req: Request, res: Response): Promise<void> {

        res.send(await policyService.create(req.body));

    }

    private async remove(req: Request, res: Response): Promise<void> {

        res.send(await policyService.delete(req.params.id));

    }

} 