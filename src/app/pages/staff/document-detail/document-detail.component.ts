import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {DocumentService} from "@lib/services/document/document.service";
import {IDocument} from "@lib/interfaces/idocument";
import {Notify} from "notiflix/build/notiflix-notify-aio";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {StaffDesignation} from "@lib/enums/staff-designation";
import {printPage} from "@lib/utils/printer/printer.util";
import {Confirm} from "notiflix";
import {DocumentState} from "@lib/enums/document-state";
import {IWorkflow} from "@lib/interfaces/iworkflow";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalComponent} from "@lib/components/modal/modal.component";
import {WorkflowService} from "@lib/services/workflow/workflow.service";
import {PaginationParams} from "@lib/classes/pagination-params";


@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: IDocument = null!;
  isLoading = false;
  designations = StaffDesignation;
  states = DocumentState;
  showDialog = false;
  showApprovalDialog = false;
  workflows: IWorkflow[] = [];
  selectedWorkflowId: string = null!;
  docForm!: FormGroup;
  approveForm!: FormGroup;

  constructor(private docService: DocumentService, private _route: ActivatedRoute, private domSanitizer: DomSanitizer, private location: Location, private fb: FormBuilder, private workflowService: WorkflowService) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((r) => {
      const id = r.get('id')
      if (id) {
        this.getDocument(id)
      } else {
        Notify.warning('Missing path parameter')
        this.location.back()
      }
    })

    this.docForm = this.fb.group({
      workflowId: [null, [Validators.required]]
    })

    this.approveForm = this.fb.group({
      comment: [null],
      file: [null],
    })

    this.getWorkflows()
  }

  getDocument(id: string) {
    this.isLoading = true;
    this.docService.retrieveSingleStaffDocument(id)
      .subscribe((doc) => {
        this.document = doc;
      }, (error) => {
        console.error(error)
        Notify.failure(error?.error?.message || error?.error?.error || 'An error occurred')
      }, () => {
        this.isLoading = true;
      })
  }

  sanitize(content: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(content)
  }

  rejectDoc(id: string) {
    Confirm.prompt('Are you sure you want to reject this submission?', 'Enter a reason for this', '', 'Reject', 'Cancel', (comment: string) => {
      this.docService.rejectDoc(id, comment)
        .subscribe(() => {
          Notify.info('The owner has been notified of the rejection')
          this.location.back();
        }, (error) => {
          Notify.failure(error?.error?.message || error?.error?.error || 'An error occurred')
        })
    }, () => {
      Notify.info('Cancelled')
    }, {
      width: '500px',
      titleMaxLength: 300
    },);
  }

  requestChanges(id: string) {
    Confirm.prompt('Are you sure you want to request changes?', 'Enter a reason for this', '', 'Submit', 'Cancel', (comment: string) => {
      this.docService.requestChanges(id, comment)
        .subscribe(() => {
          Notify.info('The owner has been notified')
          this.location.back();
        }, (error) => {
          Notify.failure(error?.error?.message || error?.error?.error || 'An error occurred')
        })
    }, () => {
      Notify.info('Cancelled')
    }, {
      width: '500px',
      titleMaxLength: 300
    },);
  }

  selectWorkflow() {
    this.showDialog = true;
  }

  print() {
    const elem = document.getElementById('request')?.innerHTML;
    if (elem) {
      const title = `${this.document.owner.lastName}-${this.document.title}, Printed By: ${this.document.currentlyAssigned?.lastName}`
      printPage(elem, {title})
    } else {
      Notify.warning('An error occurred printing the document')
    }
  }

  getWorkflows() {
    const p = new PaginationParams()
    p.take = 30;
    this.workflowService.retrieveWorkflows(p).subscribe((response) => {
      this.workflows = response.data
    }, (error) => {
      console.error(error)
      Notify.failure(error?.error?.message || error?.error?.error || 'An error occurred')
    })
  }

  cancel() {
    this.showDialog = false;
    this.showApprovalDialog = false;
  }

  setWorkflow() {
    if (this.docForm.valid) {
      this.docService.setWorkflow(this.document.id, this.docForm.value)
        .subscribe(() => {
          Notify.success('Workflow Set!')
          // this.getDocument(this.document.id)
          this.location.back();
        }, (error) => {
          console.error(error)
          Notify.failure(error?.error?.message || error?.error?.error || 'An error occurred')
        })
    }
  }

  approve() {
    if (this.approveForm.valid) {
      this.docService.approveDocument(this.document.id, this.approveForm.value?.comment, this.approveForm.value?.file)
        .subscribe(() => {
          Notify.success('Approved & Forwarded!')
          // this.getDocument(this.document.id)
          this.location.back();
        }, (error) => {
          console.error(error)
          Notify.failure(error?.error?.message || error?.error?.error || 'An error occurred')
        })
    }
  }

  showApproval() {
    this.showApprovalDialog = true;
  }
}
