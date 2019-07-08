import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';
import { IonicModule } from '@ionic/angular';
import { MCardComponent } from './components/m-card/m-card.component';
import { MHeaderComponent } from './components/m-header/m-header.component';

const DECLARATION = [
    MCardComponent,
    MHeaderComponent
];

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: DECLARATION,
    exports: DECLARATION,
    providers: [
        DeviceFeedback
    ]
})
export class LanModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LanModule,
            providers: [DeviceFeedback]
        };
    }
}

