import Express, { json } from "express"
import cors from 'cors'

import healthRouter from "./route/health.route.js"
import projectRouter from "./modules/project/project.routes.js"
import authRouter from "./modules/auth/auth.routes.js"


const app = Express();

app.use(Express.json())
app.use(cors())

app.use('/health',healthRouter)
app.use('/projects',projectRouter)
app.use('/auth',authRouter)


export default app