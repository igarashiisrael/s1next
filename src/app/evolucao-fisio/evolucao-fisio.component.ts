import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-evolucao-fisio',
  templateUrl: './evolucao-fisio.component.html',
  styleUrls: ['./evolucao-fisio.component.css'],

})
export class EvolucaoFisioComponent {
  constructor() {

  }

  isDisplay = false;
  ControleTronco($event: MatSlideToggleChange) {
    this.isDisplay = $event.checked
  }




}