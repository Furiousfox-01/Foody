import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }
  private emailSource = new Subject<string>();
  email$ = this.emailSource.asObservable();

  sendEmail(email: string) {
    this.emailSource.next(email);
  }
}
