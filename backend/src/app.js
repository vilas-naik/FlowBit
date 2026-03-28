import Express, { json } from "express"
import cors from 'cors'

import healthRouter from "./route/health.route.js"


const app = Express();

app.use(Express.json())
app.use(cors())

app.use('/health',healthRouter)


export default app