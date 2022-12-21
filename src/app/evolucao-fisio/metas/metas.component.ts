import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent {
  constructor() {

  }

  isDisplay = false;
  ControleTronco($event: MatSlideToggleChange) {
    this.isDisplay = $event.checked
  }

  EstabilidadeArticular($event: MatSlideToggleChange) {
    this.isDisplay = $event.checked
  }

}
