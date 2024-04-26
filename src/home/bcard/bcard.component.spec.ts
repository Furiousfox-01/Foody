import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcardComponent } from './bcard.component';

describe('BcardComponent', () => {
  let component: BcardComponent;
  let fixture: ComponentFixture<BcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
