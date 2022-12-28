import { Component, OnDestroy } from '@angular/core';
import { LightsService } from 'src/app/services/lights.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent {

  constructor(public trafficLightService: LightsService){ }


}
