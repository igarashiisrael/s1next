import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvolucaoFisioComponent } from './evolucao-fisio/evolucao-fisio.component';
import { LaudoFisioComponent } from './laudo-fisio/laudo-fisio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FichaIdentificacaoComponent } from './ficha-identificacao/ficha-identificacao.component';
import { FichaIdentImpressaoComponent } from './ficha-ident-impressao/ficha-ident-impressao.component';


const routes: Routes = [
  { path: 'evolucao-fisio', component: EvolucaoFisioComponent },
  { path: 'laudo-fisio', component: LaudoFisioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ficha-identificacao',component:FichaIdentificacaoComponent},
  { path: 'ficha-ident-impressao',component:FichaIdentImpressaoComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
