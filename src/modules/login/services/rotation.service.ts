import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RotationService {

  private rotateSubject = new Subject<void>();
  rotate$ = this.rotateSubject.asObservable();
  constructor() { }
  rotate(){
    this.rotateSubject.next();
  }

}
