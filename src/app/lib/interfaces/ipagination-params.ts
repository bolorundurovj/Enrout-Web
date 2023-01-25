import {SortOrder} from "@lib/enums/sort-order";

export interface IPaginationParams {
  order: SortOrder;
  page: number;
  take: number;
  q?: string;
}
