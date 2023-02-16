import { Injectable } from '@angular/core';
import {environment} from "@env/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStaffDashboardStats} from "@lib/interfaces/istaff-dashboard-stats";

const apiUrl = `${environment.apiUrl}/students`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

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
