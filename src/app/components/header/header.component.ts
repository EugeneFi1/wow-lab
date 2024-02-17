import {Component} from '@angular/core';
import {SharedModule} from "../../modules/shared.module";

@Component({
    selector: 'wow-header',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent {

}
