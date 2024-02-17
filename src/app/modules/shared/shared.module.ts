import {NgModule} from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from "@angular/common";

const MATERIAL_DESIGN_COMPONENTS = [
    MatButtonModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatToolbarModule
];

@NgModule({
    exports: [
        CommonModule,
        ...MATERIAL_DESIGN_COMPONENTS,
    ]
})
export class SharedModule {
}