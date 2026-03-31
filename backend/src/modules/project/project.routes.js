import { Router } from "express";
import { createProject,getAllProjects,getProjectById } from "./project.controller.js";

const router = Router()


router.post('/',createProject)
router.get('/',getAllProjects)
router.get('/:id',getProjectById)

export default router;