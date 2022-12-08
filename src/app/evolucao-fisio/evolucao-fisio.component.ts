import { Component } from '@angular/core';

@Component({
  selector: 'app-evolucao-fisio',
  templateUrl: './evolucao-fisio.component.html',
  styleUrls: ['./evolucao-fisio.component.css'],

})
export class EvolucaoFisioComponent {

  menuLists = ['Kid', 'Women', 'Men']
  selectedList: any
  constructor() { }

  ngOnInit() {
    this.selectedList = this.menuLists[0]
  }

  openMenuList(menuList: any) {
    this.selectedList = menuList
  }
}