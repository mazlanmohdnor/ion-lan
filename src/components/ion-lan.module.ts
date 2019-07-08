import { ModuleWithProviders, NgModule } from '@angular/core';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';
import { MCardComponent } from 'src/components/m-card/m-card.component';
import { MHeaderComponent } from 'src/components/m-header/m-header.component';

@NgModule({
    declarations: [
        // declare all components that your module uses
        MCardComponent,
        MHeaderComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        MCardComponent,
        MHeaderComponent
    ],
    providers: [
        DeviceFeedback
    ]
})
export class IonLanModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonLanModule,
            providers: [DeviceFeedback]
        };
    }
}

