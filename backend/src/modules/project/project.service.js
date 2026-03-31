import { createProject, getAllProjects, getProjectById } from "./project.model.js";

export const createProjectService = async (data) => {
  const { name, description } = data;

  if (!name) {
    throw new Error("Project name is required");
  }

  const result = await createProject(name, description);

  return {
    id: result.insertId,
    name,
    description,
  };
};

export const getAllProjectsService = async () => {
  return await getAllProjects();
}

export const getProjectByIdService = async (id) => {
  const project = await getProjectById(id);

  if (!project) {
    const err =  new Error("Project not found");
    err.statusCode = 404;
    throw err
  }

  return project;
}