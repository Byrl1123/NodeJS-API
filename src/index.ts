import App from './app'
import { NODE_ENV, PORT } from './config/config';

const app = new App()

app.listen(PORT, () => {
    console.log(`api running in Mode: ${NODE_ENV} port: ${PORT}`)
});