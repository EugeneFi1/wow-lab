export interface Project {
    id: string;
    name: string;
    description: string;
}

export interface ProjectsStateModel {
    projects: Project[];
    selectedProject?: Project;
    loading?: boolean;
}