import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RotationService } from './services/rotation.service';
import { Subscription } from 'rxjs';
import { LoginComponentData } from './login-interfaces';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginData: LoginComponentData = {
    leftHead: 'Bringing the flavor game to a whole new level.',
    title: 'FOOD:y',
  };
  visible: boolean = false;
  currentCard: number = 0;
  rotation: Subscription = new Subscription();
  email: string = '';

  constructor(
    private rotationService: RotationService,
    private router: Router
  ) {
    this.setupRotationSubscription();
  }

  ngOnDestroy() {
    this.rotation.unsubscribe();
  }

  private setupRotationSubscription(): void {
    if (this.currentCard == 0) {
      this.rotation = this.rotationService.rotate$.subscribe(() => {
        this.rotateToNext();
      });
    }
  }

  rotateToNext(): void {
    if (this.currentCard != 0) {
      // this.router.navigate(['home']);
    }
    this.currentCard = (this.currentCard + 1) % 2;
  }
}
