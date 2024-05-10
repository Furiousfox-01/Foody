import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCardComponent } from './sidebar-card.component';

describe('SidebarCardComponent', () => {
  let component: SidebarCardComponent;
  let fixture: ComponentFixture<SidebarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
