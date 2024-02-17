import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: 'wow-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
}