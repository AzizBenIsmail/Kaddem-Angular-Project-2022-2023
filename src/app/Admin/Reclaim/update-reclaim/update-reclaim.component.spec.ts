import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReclaimComponent } from './update-reclaim.component';

describe('UpdateReclaimComponent', () => {
  let component: UpdateReclaimComponent;
  let fixture: ComponentFixture<UpdateReclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
