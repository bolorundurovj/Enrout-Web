import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "@env/environment";
import {IDocumentPayload} from "@lib/interfaces/idocument-payload";
import {IDocument} from "@lib/interfaces/idocument";
import {Observable} from "rxjs";
import {IPaginationParams} from "@lib/interfaces/ipagination-params";
import {IPaginatedResponse} from "@lib/interfaces/ipaginated-response";

const apiUrl = `${environment.apiUrl}/students/documents`;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {
  }

  /**
   * It takes an IDocumentPayload object as an argument, and returns an Observable of type IDocument
   * @param {IDocumentPayload} doc - IDocumentPayload - this is the document object that we are sending to the server.
   * @returns An observable of type IDocument
   */
  createDocument(doc: IDocumentPayload): Observable<IDocument> {
    return this.http
      .post<IDocument>(
        apiUrl + '/',
        doc
      );
  }

  /**
   * It takes an object of type `IPaginationParams` as a parameter, and returns an observable of type
   * `IPaginatedResponse<IDocument>`
   * @param {IPaginationParams} params - IPaginationParams
   * @returns An observable of type IPaginatedResponse<IDocument>
   */
  retrieveDocuments(params: IPaginationParams): Observable<IPaginatedResponse<IDocument>> {
    const queryParams = new HttpParams().set('order', params.order).set('page', params.page)
      .set('take', params.take)
    if (params?.q) queryParams.set('q', params.q)

    return this.http.get<IPaginatedResponse<IDocument>>(apiUrl, {params: queryParams})
  }

  /**
   * It returns an Observable of type IDocument
   * @param {string} id - string - the id of the document to retrieve
   * @returns An observable of type IDocument
   */
  retrieveSingleDocument(id: string): Observable<IDocument> {
    return this.http.get<IDocument>(`${apiUrl}/${id}`);
  }

  /**
   * It takes an id as a parameter, and returns an observable of type IDocument
   * @param {string} id - The id of the document to be deleted.
   * @returns An observable of type IDocument.
   */
  deleteSingleDocument(id: string): Observable<IDocument> {
    return this.http.delete<IDocument>(`${apiUrl}/${id}`);
  }

  /**
   * This function takes an ID and an IDocumentPayload object and returns an Observable of type IDocument
   * @param {string} id - The ID of the document you want to update.
   * @param {IDocumentPayload} group - IDocumentPayload
   * @returns An observable of type IDocument
   */
  updateDocument(id: string, group: IDocumentPayload): Observable<IDocument> {
    return this.http
      .patch<IDocument>(
        `${apiUrl}/${id}`,
        group
      );
  }
}
