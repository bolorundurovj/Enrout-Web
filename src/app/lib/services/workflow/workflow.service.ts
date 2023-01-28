import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPaginationParams} from "@lib/interfaces/ipagination-params";
import {Observable} from "rxjs";
import {IPaginatedResponse} from "@lib/interfaces/ipaginated-response";
import {environment} from "@env/environment";
import {IWorkflow} from "@lib/interfaces/iworkflow";

const apiUrl = `${environment.apiUrl}/workflows`;

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private http: HttpClient) {
  }

  /**
   * It takes an object of type `IPaginationParams` as a parameter, and returns an observable of type
   * `IPaginatedResponse<IWorkflow>`
   * @param {IPaginationParams} params - IPaginationParams
   * @returns An observable of type IPaginatedResponse<IWorkflow>
   */
  retrieveWorkflows(params: IPaginationParams): Observable<IPaginatedResponse<IWorkflow>> {
    const queryParams = new HttpParams().set('order', params.order).set('page', params.page)
      .set('take', params.take)
    if (params?.q) queryParams.set('q', params.q)

    return this.http.get<IPaginatedResponse<IWorkflow>>(apiUrl, {params: queryParams})
  }
}
