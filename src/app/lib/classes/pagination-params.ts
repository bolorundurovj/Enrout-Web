import {IPaginationParams} from "@lib/interfaces/ipagination-params";
import {SortOrder} from "@lib/enums/sort-order";

export class PaginationParams implements IPaginationParams{
  order = SortOrder.ASC;
  page = 1;
  take = 10;
  q?: string;
}
