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


@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: IDocument = null!;
  isLoading = false;
  designations = StaffDesignation;
  states = DocumentState;

  constructor(private docService: DocumentService, private _route: ActivatedRoute, private domSanitizer: DomSanitizer, private location: Location) {
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
  }

  getDocument(id: string) {
    this.isLoading = true;
    this.docService.retrieveSingleStaffDocument(id)
      .subscribe((doc) => {
        this.document = doc;
      }, (error) => {
        console.error(error)
        Notify.failure(error?.error?.error || 'An error occurred')
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
        }, (error) => {
          Notify.failure(error?.error?.error || 'An error occurred')
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
        }, (error) => {
          Notify.failure(error?.error?.error || 'An error occurred')
        })
    }, () => {
      Notify.info('Cancelled')
    }, {
      width: '500px',
      titleMaxLength: 300
    },);
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
}
