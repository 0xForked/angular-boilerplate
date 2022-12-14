import {HttpErrorResponse} from '@angular/common/http';

export interface ErrorRespond {
  title: string;
  message: string;
}

export interface PagingRespond {
  page: number;
  total: number;
  count: number;
  skip: number;
  limit: number;
}

export interface HttpRequestState<T> {
  state: number;
  value?: T;
  paging?: PagingRespond;
  error?: HttpErrorResponse | ErrorRespond;
}
