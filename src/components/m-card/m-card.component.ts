import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';

const HTML = `
<ion-card (click)="onClick()" [button]="true" class="m-card">
    <ion-card-content class="m-card-content">
        <div class="m-img">
            <img [src]="img" alt="">
        </div>
        <div class="m-title">{{ title }}</div>
        <div class="m-subtitle">
            {{ subTitle }}
        </div>
    </ion-card-content>
</ion-card>

`;

const CSS = `
.m-card {
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.16);
  margin: 5px;
}

.m-card-content {
  margin-top: 5px;
}

.m-img {
  display: block;
  margin: auto;
  max-width: 60%;
  height: auto;
  text-align: center;
}

.m-title {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}

.m-subtitle {
  text-align: center;

}
`;

@Component({
    selector: 'ngx-lan-card',
    templateUrl: 'm-card.component.html',
    styleUrls: ['m-card.component.scss']
})
export class MCardComponent implements OnInit {
    @Input('img') img: string;
    @Input('title') title: string;
    @Input('subTitle') subTitle: string;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter<any>();
    
    constructor(
        private deviceFeedback: DeviceFeedback
    ) { }
    
    ngOnInit() {}
    
    onClick() {
        this.deviceFeedback.acoustic();
        this.tap.emit();
    }
}
