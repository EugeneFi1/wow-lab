import {Injectable} from "@angular/core";
import {RxState} from "@rx-angular/state";
import {Project, ProjectsStateModel} from "../models/project.model";
import {map, of, Subject, switchMap} from "rxjs";

const projects: Project[] = [
    {
        id: "1",
        name: "d3 js",
        description: "Test d3.js lib",
        icon: "account_tree"
    },
    {
        id: "2",
        name: "Binary search tree",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla sapien sit amet metus lacinia, a ultricies nisl volutpat. Praesent fermentum lorem id augue dignissim semper. Donec mollis turpis nulla, nec sollicitudin libero tempus sit amet. Proin eleifend scelerisque velit eu tristique. Nam pharetra orci vulputate, vehicula libero vel, venenatis risus. Integer laoreet sodales pharetra. Sed varius odio ut nisi hendrerit sagittis. Sed non nisi ultrices, posuere metus nec, aliquam nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras efficitur tellus non viverra mattis. Nunc ut pellentesque augue, vitae dictum ex. Proin ut facilisis quam. Duis eu velit sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
        id: "3",
        name: "Angular signals",
        description: "Angular signals test",
        icon: "wifi"
    },
    {
        id: "4",
        name: "Angular pipes",
        description: "Custom usefull Angular pipes"
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