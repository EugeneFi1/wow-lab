import {Component, Input} from "@angular/core";
import {Project} from "../../../models/project.model";

@Component({
    selector: 'wow-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.less']
})
export class ProjectCard {
    @Input({required: true}) project!: Project;
}