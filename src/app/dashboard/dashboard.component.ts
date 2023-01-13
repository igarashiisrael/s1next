import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  public chart: any;


  ngOnInit(): void {
    Chart.register(...registerables);

    this.chart = new Chart('captacao', {
      type: 'doughnut',
      data: {
        labels: ['Solicitação de Avaliação', 'Avaliação realizada', 'Entrega da avaliação para a OPS', 'Implantação autorizada', 'Check list para implantação concluído', 'Implantação concluida'],
        datasets: [
          {
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
    });

    this.chart = new Chart('faturamento', {
      type: 'bar',
      data: {
        labels: ["Implantação Autorizada", "Reunião com a Família", "Checagem da Residência", "Solicitação de Insumos", "Assinatura de Termos", "Checagem de Entrega dos Insumos", "Agendamento de Remoção", "Implantação", "Relatório Concluido"],
        datasets: [
          {
            label: '',
            data: [98, 19, 54, 25, 73, 24, 86, 49, 91, 45],
            borderWidth: 1,
          },
        ],
      },
    });

    this.chart = new Chart('implantacao', {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

        datasets: [
          {
            label: 'Análise do Prontuário',
            data: [85, 72, 86, 81, 84, 14, 95, 68, 61, 47, 33, 20],
            borderColor: '#32CD32',
          },
          {
            label: 'Faturamento',
            data: [7, 23, 88, 35, 63, 12, 47, 68, 55, 74, 81, 13],
            borderColor: '#00CED1'
          },
          {
            label: 'Checagem das Contas',
            data: [33, 2, 46, 77, 98, 45, 13, 87, 22, 39, 47, 95],
            borderColor: '#FF4500'
          }
        ]
      }
    })

    this.chart = new Chart('operacaoIntercorrencia', {
      type: 'pie',
      data: {
        labels: ['Intercorrência Clínica', 'Avaliação EQ Médica', 'Conduta / ADT Realizado', 'Requisição', 'Separação do KIT', 'Envio para Residência', 'Entrega Realizada', 'Monitoramento / Encerramento'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 33, 54, 27, 39, 88, 73],
            borderWidth: 1,
          },
        ],
      },
    });

    /* 
  
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;
  ngOnInit() {
  
  
  
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
          {
            data: [85, 72, 86, 81, 84, 14, 95, 68, 61, 47, 33, 20],
            borderColor: '#32CD32',
          },
          {
            data: [7, 23, 88, 35, 63, 12, 47, 68, 55, 74, 81, 13],
            borderColor: '#00CED1'
          }
        ]
      }
    }); */
  }
}