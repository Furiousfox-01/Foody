import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FoodDataService {
  private apiUrl = 'https://192.168.1.149:7117/api/categories/';
  // private apiUrl = 'assets/desserts.json';

  constructor(private http: HttpClient) {}
  getFoodData(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    console.log(url);
    return this.http.get<any>(url);
    // return this.http.get<any>(this.apiUrl);
  }
}
