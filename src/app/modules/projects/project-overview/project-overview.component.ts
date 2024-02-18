import {Component, OnInit} from "@angular/core";
import {ProjectsState} from "../projects.state";
import {ActivatedRoute} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: "wow-project-overview",
    templateUrl: "./project-overview.component.html",
    styleUrls: ["./project-overview.component.less"]
})
export class ProjectOverviewComponent {
    public _selectedProject$ = this.state.select("selectedProject");

    constructor(
        private route: ActivatedRoute,
        private state: ProjectsState
    ) {
        this.route.paramMap
            .pipe(takeUntilDestroyed())
            .subscribe(paramMap => this.state.selectProject(paramMap.get("id") as string));
    }
}