import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DashboardStats {
    title: string;
    value: string;
    change: string;
    description: string;
    colorClass: string;
}

export interface Activity {
    id: number;
    activity: string;
    date: string;
    status: string;
}

export interface DashboardData {
    stats: DashboardStats[];
    activities: Activity[];
}

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl + '/api/dashboard';

    getDashboardData(): Observable<DashboardData> {
        return this.http.get<DashboardData>(this.apiUrl);
    }
}
