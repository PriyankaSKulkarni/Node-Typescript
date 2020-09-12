import { Connection, createConnection } from 'typeorm';

import { IDatabaseConfiguration } from '../Interfaces/IDatabaseProvider';

import { Policy } from '../Data/Entities/Policy';



export class DatabaseProvider {

    private static connection: Connection;

    private static configuration: IDatabaseConfiguration;



    public static configure(config: IDatabaseConfiguration): void {

        try {

            DatabaseProvider.configuration = config;

        } catch (e) {

            console.log(e);

        }

    } 

    public static async getConnection(): Promise<Connection> {

        if (DatabaseProvider.connection) {

            return DatabaseProvider.connection

        }

        try {



            const { type, host, port, username, password, database, ssl } = DatabaseProvider.configuration;

            DatabaseProvider.connection = await createConnection({

                type, host, port, username, password, database,

                extra: {

                    ssl

                },

                entities: [

                    Policy

                ],

                autoSchemaSync: true

            } as any);



        } catch (e) {

            console.log(e);

        }



        return DatabaseProvider.connection;

    }

} 