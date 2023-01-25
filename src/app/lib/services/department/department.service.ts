import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IDepartment} from "@lib/interfaces/idepartment";
import {IPaginationParams} from "@lib/interfaces/ipagination-params";
import {IPaginatedResponse} from "@lib/interfaces/ipaginated-response";
import {Observable} from "rxjs";

const apiUrl = `${environment.apiUrl}/departments`;

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }

  /**
   * It takes an object of type `IPaginationParams` as a parameter, and returns an observable of type
   * `IPaginatedResponse<IDepartment>`
   * @param {IPaginationParams} params - IPaginationParams
   * @returns An observable of type IPaginatedResponse<IDepartment>
   */
  retrieveDepartments(params: IPaginationParams): Observable<IPaginatedResponse<IDepartment>> {
    const queryParams = new HttpParams().set('order', params.order).set('page', params.page)
      .set('take', params.take)
    if (params?.q) queryParams.set('q', params.q)

    return this.http.get<IPaginatedResponse<IDepartment>>(apiUrl, {params: queryParams})
  }
}
