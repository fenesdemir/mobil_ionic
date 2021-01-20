import { Component, OnInit } from '@angular/core';
import { Med } from "../med";
import { MedService } from "../med.service";

@Component({
  selector: 'app-meds',
  templateUrl: './meds.page.html',
  styleUrls: ['./meds.page.scss'],
})
export class MedsPage implements OnInit {

  meds: Med[];

  selectedMed: Med;

  constructor(private medService: MedService) { }

  getMeds(): void{
    this.medService.getMeds().subscribe( meds => this.meds = meds);
  }

  onSelect(med: Med):void{
    this.selectedMed = med;
  }

  ngOnInit() {
    this.getMeds();
  }

}
