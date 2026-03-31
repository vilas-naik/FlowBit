import { createProjectService,getAllProjectsService, getProjectByIdService } from './project.service.js'

export const createProject = async (req, res, next) => {
    try {
        const { name, description } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({ error: "Name is required" });
        }

        const project = await createProjectService({
            name,
            description,
        });

        res.status(201).json(project);
    } catch (err) {
        next(err);
    }
}

export const getAllProjects = async (req, res, next) => {
    try {
        const projects = await getAllProjectsService();
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
}


export const getProjectById = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "Invalid project ID" });
        }

        const project = await getProjectByIdService(id);

        res.status(200).json(project);
    } catch (err) {
        next(err);
    }
}