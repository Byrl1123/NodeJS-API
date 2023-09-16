import { Express } from "express";
import { PORT } from "./config/config";
import { Routes } from "./Interfaces/route.interface"; 

class App {
    public app: express.Application;
    public env: string;
    public port: number | string;

    constructor(routes: Routes[]){
        this.app = express()
        this.env = NODE_ENV || 'development';
        this.port = Number(PORT) || 5000;
    }
}

export default App;
