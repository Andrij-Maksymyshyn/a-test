import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable, delay, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
    
export class ProductsService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams().append('limit', 7)
        }).pipe(
            delay(2500),
            catchError(this.errorHandler.bind(this))
        )
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}