import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Project} from "../../../models/project.model";

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
    }
]

@Component({
    selector: 'wow-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
    public _projects = projects;
}