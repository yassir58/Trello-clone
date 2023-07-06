import express, { Express } from 'express';
import morgan from 'morgan';

const app: Express = express();

if (process.env.DEV_MODE == 'dev')
    app.use(morgan('dev'))

app.use(express.json({limit: '10kb'}));

export default app;