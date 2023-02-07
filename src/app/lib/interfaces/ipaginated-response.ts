import {IPaginatedMetadata} from "@lib/interfaces/ipaginated-metadata";

export interface IPaginatedResponse<T> {
  data: T[];
  meta: IPaginatedMetadata
}
