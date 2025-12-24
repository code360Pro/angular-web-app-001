import { Component, OnInit, inject, signal } from '@angular/core';
import { DashboardService, DashboardData, DashboardStats, Activity } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  private dashboardService = inject(DashboardService);

  stats = signal<DashboardStats[]>([]);
  activities = signal<Activity[]>([]);

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.stats.set(data.stats);
      this.activities.set(data.activities);
    });
  }
}
