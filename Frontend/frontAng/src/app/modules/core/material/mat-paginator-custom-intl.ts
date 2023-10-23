import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorCustomIntl extends MatPaginatorIntl {
  override firstPageLabel = 'First page';
  override lastPageLabel = 'Last page';
  override nextPageLabel = 'Next page';
  override previousPageLabel = 'Previous page';
  override itemsPerPageLabel = 'Elements number on page:';
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 z ${length}`;
    }

    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} z ${length}`;
  };
}
