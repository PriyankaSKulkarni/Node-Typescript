export interface IDatabaseConfiguration {

    type: 'mysql' | 'mssql',

    host: string,

    port: number | string;

    username: string;

    password: string;

    database: string;

    ssl?: boolean

} 