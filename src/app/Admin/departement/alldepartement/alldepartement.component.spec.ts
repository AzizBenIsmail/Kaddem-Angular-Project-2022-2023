import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldepartementComponent } from './alldepartement.component';

describe('AlldepartementComponent', () => {
  let component: AlldepartementComponent;
  let fixture: ComponentFixture<AlldepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
