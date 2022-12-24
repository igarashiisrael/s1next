import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent {
  EstabilidadeArticularToogle = false;
  ControleTroncoToggle = false;
  MaiorIndependenciaAutonomiaToogle = false;
  ManterViasAereasPerveasToogle = false;
  ManutencaoGanhoDeAdmToogle = false;
  ManutencaoGanhoForcaMuscularToogle = false;
  ManutencaoMelhoraFuncaoPulmonarToogle = false;
  ManutencaoMelhoraTonusMuscToogle = false;
  MelhorCoordenacaoMotoraToogle = false;
  MelhorFlexibilidadeToogle = false;
  MelhorQualidadeDeVidaToogle = false;
  MelhorEquilibrioToogle = false;
  MelhorPadraoMarchaToogle = false;
  MinimizarEfeitosImobilidadeToogle = false;
  ReducaoRigidezArticularToogle = false;
  PrevQuedasComplicacoesToogle = false;
  PrevContraturasDeformidadesToogle = false;
  PrevDoencasPulmonaresToogle = false;
  PrevSurgimentoUlcerasDePressaoToogle = false;
  PrevTvpToogle = false;
  ReducaoQuadroAlgicoToogle = false;

  constructor() {

  }


}
