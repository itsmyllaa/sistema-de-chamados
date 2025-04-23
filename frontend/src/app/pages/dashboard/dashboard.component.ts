import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [12, 19, 3, 5, 2],
      label: 'Chamados Resolvidos',
      backgroundColor: '#28a745'
    }
  ];
}
