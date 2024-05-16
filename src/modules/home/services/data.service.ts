import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getData():Observable<any> {
    return this.http.get('https://192.168.1.149:7117/api/categories');
  }
}
