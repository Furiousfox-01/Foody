import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RotationService } from '../../modules/login/services/rotation.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthInterceptorService } from '../../modules/login/services/auth-interceptor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnChanges {
  @Input() value: string | undefined;
  @Input() visible: boolean | undefined;
  token: string = '';
  // @Input() id: string | undefined;
  @Input() data: string = '';
  @Input() otp: number = 0;

  @Output() action = new EventEmitter<{ actionType: any }>();
  @Input() btnType: string | undefined;
  variant: boolean = false;

  constructor(
    private rotationService: RotationService,
    private http: HttpClient,
    private auth: AuthInterceptorService,
    private router: Router
  ) {}
  ngOnInit() {
    // console.log(this.value);
    if (this.value == 'Order Now' || this.btnType == 'secondary') {
      this.variant = true;
    } else {
      this.variant = false;
    }
  }
  rotateToNextChild() {
    this.rotationService.rotate();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['btnType']) {
      this.onChange();
    }
  }

  onChange() {
    if (this.btnType === 'primary') {
      this.variant = false;
    } else this.variant = true;
  }

  handleButton() {
    if (this.value != 'Order Now') {
      this.rotateToNextChild();
    } else this.action.emit({ actionType: 'Order Now' });
    if (this.value === 'GET OTP' || this.value === 'ENTER') {
      if (this.value == 'GET OTP') this.ValidateEmail();
      else {
        this.ValidateOTP();
      }
    }
  }

  ValidateEmail(): void {
    this.rotationService.sendEmail(this.data);
    this.responseOTP().subscribe((response) => console.log(response));
  }

  ValidateOTP() {
    this.rotationService.emailSource.subscribe({
      next: (datas: any) => (this.data = datas),
      error: (err: any) => console.log(err),
    });

    this.responseVOTP().subscribe((response) => {
      if (response.status == 'Ok') {
        console.log(response.message + 'hello wrold');
        this.token = response.message;
        this.auth.setToken(this.token);
        alert('logined!!');
        this.router.navigate(['home']);
      } else {
        console.log(response);
        alert('internal error!!');
      }
    });
  }
  private navi(): void {
    // this.router.navigate(['/home']);
  }
  private responseOTP(): Observable<any> {
    this.auth.getToken().subscribe((token) => {
      console.log('Token in service:', token);
    });
    return this.http.post<any>('https://192.168.1.149:7117/api/login', {
      Email: this.data,
    });
  }

  private responseVOTP(): Observable<any> {
    return this.http.post<any>(
      'https://192.168.1.149:7117/api/login/validate',
      {
        email: this.data,
        otp: this.otp,
      }
    );
  }
}
