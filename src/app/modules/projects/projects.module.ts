import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {ProjectCard} from "./project-card/project-card.component";
import {SharedModule} from "../shared/shared.module";
import {ProjectsState} from "./projects.state";

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    }
];

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectCard
    ],
    providers: [ProjectsState],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ProjectsModule {
}