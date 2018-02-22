import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow.service';

@Component({
  selector: 'app-widgetcontrols',
  templateUrl: './widgetcontrols.component.html',
  styleUrls: ['./widgetcontrols.component.css']
})
export class WidgetcontrolsComponent implements OnInit {

  public showLayout: string;
  public adminState: boolean;
  wfs: any;

  constructor(wfs: WorkflowService) {
    this.wfs = wfs;
  }

  ngOnInit() {
  }

  showSimple() {
    console.log('simple');
    this.wfs.change('simple');
  }
  showFlourish() {
    this.wfs.change('flourish');
  }

}
