import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNumComponent } from './login-num.component';

describe('LoginNumComponent', () => {
  let component: LoginNumComponent;
  let fixture: ComponentFixture<LoginNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginNumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
