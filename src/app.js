import express from 'express'
import routes from './routes.js'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import './database/index.js' // executa o codigo q esta dentro

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
class App {
    constructor() {
        this.app = express()

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
    }

    routes() {
        this.app.use(routes)
    }


}

export default new App().app