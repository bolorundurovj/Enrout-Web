import {IStudent} from "@lib/interfaces/student.interface";
import {DocumentState} from "@lib/enums/document-state";
import {IStaff} from "@lib/interfaces/istaff";
import {IWorkflow} from "@lib/interfaces/iworkflow";

export interface IDocument {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  state: DocumentState;
  title: string;
  description: string;
  attachment: string;
  owner: IStudent;
  workflow?: IWorkflow;
  currentlyAssigned?: IStaff;
  currentlyAssignedId: string;
  handlers: string[];
}
