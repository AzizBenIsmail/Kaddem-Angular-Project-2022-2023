import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclaimComponent } from './add-reclaim.component';

describe('AddReclaimComponent', () => {
  let component: AddReclaimComponent;
  let fixture: ComponentFixture<AddReclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
