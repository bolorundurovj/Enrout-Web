import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import {HttpClient} from "@angular/common/http";
import {IStaffDashboardStats} from "@lib/interfaces/istaff-dashboard-stats";
import {Observable} from "rxjs";

const apiUrl = `${environment.apiUrl}/staff`;

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) {
  }

  /**
   * It returns an Observable of type IStaffDashboardStats
   * @returns An observable of type IStaffDashboardStats
   */
  retrieveDashboardStats(): Observable<IStaffDashboardStats> {
    return this.http.get<IStaffDashboardStats>(`${apiUrl}/dashboard-stats`);
  }
}
