import express from 'express';
import router from './routes';
import cors from 'cors';

function createApp() {
    const app = express();
    
    app.use(express.json())  
    app.use("/api", router);

    const corsOptions = {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'UPDATE'],
    }


    app.use(cors(corsOptions))

    return app;
}

export default createApp;