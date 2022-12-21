import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EvolucaoFisioComponent } from './evolucao-fisio/evolucao-fisio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LaudoFisioComponent } from './laudo-fisio/laudo-fisio.component';
import { SinaisVitaisComponent } from './laudo-fisio/sinais-vitais/sinais-vitais.component';
import { SinaisVitaisPediatricoComponent } from './laudo-fisio/sinais-vitais-pediatrico/sinais-vitais-pediatrico.component';
import { AltaComponent } from './laudo-fisio/alta/alta.component';
import { AvaliacaoComponent } from './laudo-fisio/avaliacao/avaliacao.component';
import { ReavaliacaoComponent } from './laudo-fisio/reavaliacao/reavaliacao.component';
import { LaudoComponent } from './laudo-fisio/laudo/laudo.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FichaIdentificacaoComponent } from './ficha-identificacao/ficha-identificacao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EvolucaoFisioComponent,
    LaudoFisioComponent,
    SinaisVitaisComponent,
    SinaisVitaisPediatricoComponent,
    AltaComponent,
    AvaliacaoComponent,
    ReavaliacaoComponent,
    LaudoComponent,
    CabecalhoComponent,
    FichaIdentificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
