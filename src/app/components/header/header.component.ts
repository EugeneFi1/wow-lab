import {Component} from '@angular/core';
import {SharedModule} from "../../modules/shared/shared.module";
import { ProjectsState } from '../../services/projects.state';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'wow-header',
    standalone: true,
    imports: [SharedModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent {
    public _selectedProject$: Observable<Project | null> = this.projectsState.select("selectedProject");

    constructor(private projectsState: ProjectsState) {
    }

    public _resetProject(): void {
        this.projectsState.resetSelectedProject();
    }
}
