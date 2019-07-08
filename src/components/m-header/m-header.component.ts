import { Component, OnInit } from '@angular/core';

const HTML = `
<div class="m-content">
    <div class="container">
        <div class="m-title">
            Mazlan Hensem
        </div>
        <div class="m-sub-title">
            Dia memang hensem dari lahir pun.
        </div>
    </div>
</div>

`;

const CSS = `
.m-content {
  background-color: #F0F5FB;
}

.container {
  padding: 35px 25px 25px;
}

.m-title {
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  margin-top: 10px;
}

.m-sub-title {
  margin-top: 5px;
}

`;

@Component({
    selector: 'ngx-lan-header',
    templateUrl: 'm-header.component.html',
    styleUrls: ['m-header.component.scss']
})
export class MHeaderComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit() {}
    
}
