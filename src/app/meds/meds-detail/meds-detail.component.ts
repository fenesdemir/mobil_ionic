import { Component, OnInit, Input } from '@angular/core';
import { Med } from "../../med";

@Component({
  selector: 'app-meds-detail',
  templateUrl: './meds-detail.component.html',
  styleUrls: ['./meds-detail.component.scss'],
})
export class MedsDetailComponent implements OnInit {

  @Input() med: Med;

  constructor() { }

  ngOnInit() {}

}
