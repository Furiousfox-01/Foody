import { Injectable } from '@angular/core';
import { Subject ,BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RotationService {
  private rotateSubject = new Subject<void>();
  rotate$ = this.rotateSubject.asObservable();

  emailSource:any = new BehaviorSubject('samplesubject');
  // email$ = this.emailSource.asObservable();

  constructor() {}

  rotate() {
    this.rotateSubject.next();
  }

  getEmail() {
     this.emailSource.subscribe({
      next: (data:any) => console.log(data),
      error: (err:any) => console.log(err),
    });
  }

  sendEmail(email: string) {
    this.emailSource.next(email);
  }
}
