import {IStudent} from "@lib/interfaces/student.interface";
import {DocumentState} from "@lib/enums/document-state";

export interface IDocument {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  state: DocumentState;
  title: string;
  description: string;
  attachment: string;
  owner: IStudent;
  workflow: any;
  currentlyAssigned: any;
  handlers: string[];
}
