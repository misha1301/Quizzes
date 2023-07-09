import {Component, ViewEncapsulation} from '@angular/core';
import {LoaderService} from '../../app/loader.service'
@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class ProgressSpinnerComponent {
  constructor(public loader: LoaderService) {
  }
}
