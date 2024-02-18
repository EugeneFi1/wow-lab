import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {ProjectCardComponent} from "./project-card/project-card.component";
import {SharedModule} from "../shared/shared.module";
import {ProjectsState} from "./projects.state";
import {ProjectOverviewComponent} from "./project-overview/project-overview.component";

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    {
        path: ':id',
        component: ProjectOverviewComponent
    }
];

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectCardComponent,
        ProjectOverviewComponent
    ],
    providers: [ProjectsState],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ProjectsModule {
}