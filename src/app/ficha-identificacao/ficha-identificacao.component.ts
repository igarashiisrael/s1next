import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-identificacao',
  templateUrl: './ficha-identificacao.component.html',
  styleUrls: ['./ficha-identificacao.component.css']
})
export class FichaIdentificacaoComponent {
 constructor(private router:Router){}
 
 printFichaIdentificacao():void{
 /* console.log('Navegando...')*/
this.router.navigate(['ficha-ident-impressao']) 
 }

}
