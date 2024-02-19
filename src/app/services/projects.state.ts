import {Injectable} from "@angular/core";
import {RxState} from "@rx-angular/state";
import {Project, ProjectsStateModel} from "../models/project.model";
import {map, of, Subject, switchMap} from "rxjs";

const projects: Project[] = [
    {
        id: "1",
        name: "d3 js",
        description: "Test d3.js lib"
    },
    {
        id: "2",
        name: "Binary search tree",
        description: "Binary search tree test"
    },
    {
        id: "3",
        name: "Angular signals",
        description: "Angular signals test"
    }
]

@Injectable({providedIn: 'root'})
export class ProjectsState extends RxState<ProjectsStateModel> {
    private selectedProjectTrigger = new Subject<Project["id"]>();

    constructor() {
        super();

        this.connect("projects", of(projects));

        this.connect("selectedProject", this.selectedProjectTrigger.pipe(switchMap(id =>
            this.select("projects").pipe(map(projects => projects.find(project => project.id === id))))
        ));
    }

    public selectProject(id: Project["id"]): void {
        this.selectedProjectTrigger.next(id);
    }
}