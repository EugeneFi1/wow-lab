import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ProjectsState} from "../projects.state";


@Component({
    selector: 'wow-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
    public _projects$ = this.state.select("projects");

    constructor(private state: ProjectsState) {
    }
}