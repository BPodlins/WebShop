import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import {
  BasketResponse,
  GetBasketResponse,
  PostBasketBody,
} from '../models/basket.module';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ServerResponse } from '../models/server-response.model';

function extractResponse(
  response: HttpResponse<ServerResponse | GetBasketResponse>
): BasketResponse {
  if (!response.body) return { body: null, totalCount: 0 };

  const totalCount = Number(response.headers.get('X-Total-Count'));

  return { body: { ...response.body }, totalCount };
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  apiUrl = `${environment.apiUrl}/basket`;

  totalCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {}

  getBasketProducts(): Observable<BasketResponse> {
    return this.http
      .get<GetBasketResponse>(`${this.apiUrl}`, {
        withCredentials: true,
        observe: 'response',
      })
      .pipe(
        map(extractResponse),
        tap(({ totalCount }) => {
          this.totalCount$.next(totalCount);
        })
      );
  }

  addProductToBasket(body: PostBasketBody): Observable<BasketResponse> {
    return this.http
      .post<ServerResponse>(`${this.apiUrl}`, body, {
        withCredentials: true,
        observe: 'response',
      })
      .pipe(
        map(extractResponse),
        tap(({ totalCount }) => {
          this.totalCount$.next(totalCount);
        })
      );
  }

  deleteProductFromBasket(uuid: string): Observable<BasketResponse> {
    const params = new HttpParams().append('uuid', uuid);
    return this.http
      .delete<ServerResponse>(`${this.apiUrl}`, {
        withCredentials: true,
        observe: 'response',
        params,
      })
      .pipe(
        map(extractResponse),
        tap(({ totalCount }) => {
          this.totalCount$.next(totalCount);
        })
      );
  }
}
