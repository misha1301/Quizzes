import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import * as Highcharts from 'angular-highcharts';

@Component({
  selector: 'app-quizzes-stats',
  templateUrl: './quizzes-stats.component.html',
  styleUrls: ['./quizzes-stats.component.css']
})
export class QuizzesStatsComponent implements OnInit {
  @Input() numberOfQuizzes:number = 0;
  @Input() totalAnswers:number = 0;
  @Input() averageTime:number = 0;
  @Input() pieDiagramSeries:number[] = [0,0];

  option: any = {
    chart: {
      type: 'pie',
      plotShadow: false,
      backgroundColor: undefined,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        size: '100%',
        borderWidth: 40,
        borderColor: undefined,
        slicedOffset: 20,
        dataLabels: {
          connectorWidth: 0,
          enabled: false,
          style: {
            color: '#ffffff',
            strokeWidth: 0,
            fontFamily: 'Inter, serif',
            fontSize: '16px',
            fontWeight: 400,
          }
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          {name: 'incorrect',  description: 'Incorrect', y: this.pieDiagramSeries[1], color: '#f9f9f9'},
          {name: 'correct',description: 'Correct', y: this.pieDiagramSeries[0], color: '#a4da59'},
        ],
      },
    ],
  }

  donutChart:Chart  = new Highcharts.Chart(this.option);

  ngOnInit(){
    this.option.series[0].data = [
      {name: '', y: this.pieDiagramSeries[1], color: '#f9f9f9'},
      {name: '', y: this.pieDiagramSeries[0], color: '#a4da59'},
    ]
    this.donutChart = new Highcharts.Chart(this.option);
  }

  convertMsToTime(milliseconds: number): string {
    let seconds: number = Math.floor(milliseconds / 1000);
    let minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${hours > 0 ? hours + ' h. ' : ''}${minutes > 0 ? minutes + ' mim. ' : ''}${seconds > 0 ? seconds + ' sec. ' : ''}`;
  }

}
