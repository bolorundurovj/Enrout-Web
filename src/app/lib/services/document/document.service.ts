import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "@env/environment";
import {IDocumentPayload} from "@lib/interfaces/idocument-payload";
import {IDocument} from "@lib/interfaces/idocument";
import {Observable} from "rxjs";
import {IPaginationParams} from "@lib/interfaces/ipagination-params";
import {IPaginatedResponse} from "@lib/interfaces/ipaginated-response";
import {IPublishDocumentPayload} from "@lib/interfaces/ipublish-document-payload";

const studentApiUrl = `${environment.apiUrl}/students/documents`;
const staffApiUrl = `${environment.apiUrl}/staff/documents`;

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
        studentApiUrl + '/',
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

    return this.http.get<IPaginatedResponse<IDocument>>(studentApiUrl, {params: queryParams})
  }

  /**
   * It takes an object of type `IPaginationParams` as a parameter, and returns an observable of type
   * `IPaginatedResponse<IDocument>`
   * @param {IPaginationParams} params - IPaginationParams
   * @returns An observable of type IPaginatedResponse<IDocument>
   */
  retrieveStaffDocuments(params: IPaginationParams): Observable<IPaginatedResponse<IDocument>> {
    const queryParams = new HttpParams().set('order', params.order).set('page', params.page)
      .set('take', params.take)
    if (params?.q) queryParams.set('q', params.q)

    return this.http.get<IPaginatedResponse<IDocument>>(staffApiUrl, {params: queryParams})
  }

  /**
   * It returns an Observable of type IDocument
   * @param {string} id - string - the id of the document to retrieve
   * @returns An observable of type IDocument
   */
  retrieveSingleDocument(id: string): Observable<IDocument> {
    return this.http.get<IDocument>(`${studentApiUrl}/${id}`);
  }

  /**
   * It returns an Observable of type IDocument, which is a single document object
   * @param {string} id - The id of the document you want to retrieve.
   * @returns An observable of type IDocument
   */
  retrieveSingleStaffDocument(id: string): Observable<IDocument> {
    return this.http.get<IDocument>(`${staffApiUrl}/${id}`);
  }

  /**
   * It takes an id as a parameter, and returns an observable of type IDocument
   * @param {string} id - The id of the document to be deleted.
   * @returns An observable of type IDocument.
   */
  deleteSingleDocument(id: string): Observable<IDocument> {
    return this.http.delete<IDocument>(`${studentApiUrl}/${id}`);
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
        `${studentApiUrl}/${id}`,
        group
      );
  }

  /**
   * This function takes in an id and a body, and returns an observable of type IDocument
   * @param {string} id - The id of the document you want to publish
   * @param {IPublishDocumentPayload} body - IPublishDocumentPayload
   * @returns An observable of type IDocument
   */
  publishDocument(id: string, body: IPublishDocumentPayload): Observable<IDocument> {
    return this.http
      .patch<IDocument>(
        `${studentApiUrl}/${id}/publish`,
        body
      );
  }


  /**
   * It sends a PATCH request to the API to update the document with the given ID
   * @param {string} id - The id of the student to nudge
   * @returns An observable of type IDocument
   */
  sendNudge(id: string): Observable<IDocument> {
    return this.http
      .patch<IDocument>(
        `${studentApiUrl}/${id}/nudge`,
        {}
      );
  }

  /**
   * It sends a PATCH request to the server, with the ID of the document to reject, and a comment
   * @param {string} id - The id of the document to be rejected
   * @param {string} comment - string - The comment to be added to the document
   * @returns An observable of type IDocument
   */
  rejectDoc(id: string, comment: string): Observable<IDocument> {
    return this.http
      .patch<IDocument>(
        `${staffApiUrl}/${id}/reject`,
        {comment}
      );
  }

  /**
   * It sends a PATCH request to the server, with the ID of the document and a comment, and returns an observable of the
   * document
   * @param {string} id - The id of the document you want to request changes for.
   * @param {string} comment - The comment that the staff member will leave for the student.
   * @returns An observable of type IDocument
   */
  requestChanges(id: string, comment: string): Observable<IDocument> {
    return this.http
      .patch<IDocument>(
        `${staffApiUrl}/${id}/request-changes`,
        {comment}
      );
  }
}
