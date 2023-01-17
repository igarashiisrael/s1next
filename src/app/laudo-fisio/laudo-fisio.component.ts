import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laudo-fisio',
  templateUrl: './laudo-fisio.component.html',
  styleUrls: ['./laudo-fisio.component.css']
})
export class LaudoFisioComponent {
  constructor(private router:Router){}
 
  printLaudoFisio():void{
  /* console.log('Navegando...')*/
 this.router.navigate(['laudo-fisio-impressao']) 
  }
}
