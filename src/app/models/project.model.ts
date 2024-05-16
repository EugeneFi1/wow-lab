export interface Project {
    id: string;
    name: string;
    description: string;
    icon?: string;
}

export interface ProjectsStateModel {
    projects: Project[];
    selectedProject: Project | null;
    loading: boolean;
}
