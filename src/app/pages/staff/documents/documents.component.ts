import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IDocument} from "@lib/interfaces/idocument";
import {PaginationParams} from "@lib/classes/pagination-params";
import {IPaginatedMetadata} from "@lib/interfaces/ipaginated-metadata";
import {DomSanitizer} from "@angular/platform-browser";
import {DocumentService} from "@lib/services/document/document.service";
import {Notify} from "notiflix/build/notiflix-notify-aio";
import {DocumentState} from "@lib/enums/document-state";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  limits: number[] = [10, 20, 40, 50]
  docForm!: FormGroup;
  description: Event = null!;
  showDialog = false;
  documents: Array<IDocument> = [];
  isLoading = false;
  formMode: 'new' | 'edit' = 'new'

  pagination = new PaginationParams()
  paginationMeta: IPaginatedMetadata = {
    "page": 1,
    "take": 10,
    "itemCount": 10,
    "pageCount": 1,
    "hasPreviousPage": false,
    "hasNextPage": false
  };
  maxPages = 10;
  pages: number[] = [];
  doc: IDocument = null!;

  constructor(private domSanitizer: DomSanitizer, private fb: FormBuilder, private _docService: DocumentService) {
  }

  showConfirm() {
    this.showDialog = true;
  }

  ngOnInit() {
    this.docForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })

    this.getDocs()
  }


  getDocs() {
    this.isLoading = true;
    this._docService.retrieveStaffDocuments(this.pagination)
      .subscribe(
        (response) => {
          if (response) {
            this.documents = response.data;
            this.paginationMeta = response.meta;
          } else {
            Notify.failure("An error occurred, please try again")
          }
        },
        (error) => {
          console.error(error)
          Notify.failure(`${error.error?.error || 'An error occurred'}`);
        },
        () => {
          this.isLoading = false;
          this.paginate();
        }
      );
  }

  cancel() {
    this.showDialog = false;
  }

  setPage(page: number) {
    this.pagination.page = page;
    this.getDocs()
  }

  previousPage() {
    if (this.pagination.page > 1) {
      --this.pagination.page;
      this.getDocs()
    }
  }

  nextPage() {
    if (this.pagination.page < this.paginationMeta.pageCount) {
      ++this.pagination.page;
      this.getDocs()
    }
  }

  paginate() {
    if (this.pagination.page < 1) {
      this.pagination.page = 1;
    } else if (this.pagination.page > this.paginationMeta.pageCount) {
      this.pagination.page = this.paginationMeta.pageCount;
    }

    let startPage: number, endPage: number;
    if (this.paginationMeta.pageCount <= this.maxPages) {
      startPage = 1;
      endPage = this.paginationMeta.pageCount;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;
      if (this.pagination.page <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = this.maxPages;
      } else if (this.pagination.page + maxPagesAfterCurrentPage >= this.paginationMeta.pageCount) {
        startPage = this.paginationMeta.pageCount - this.maxPages + 1;
        endPage = this.paginationMeta.pageCount;
      } else {
        startPage = this.pagination.page - maxPagesBeforeCurrentPage;
        endPage = this.pagination.page + maxPagesAfterCurrentPage;
      }
    }

    // const startIndex = (this.pagination.page - 1) * this.pagination.take;
    // const endIndex = Math.min(startIndex + this.pagination.take - 1, this.paginationMeta.pageCount - 1);

    this.pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );
  }

  pillColor(state: DocumentState) {
    switch (state) {
      case DocumentState.APPROVED:
        return 'bg-green-500'
      case DocumentState.DRAFT:
        return 'bg-gray-500'
      case DocumentState.PENDING:
        return 'bg-orange-500'
      case DocumentState.REJECTED:
        return 'bg-red-500'
      default:
        return 'bg-black'
    }
  }

}
