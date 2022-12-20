import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedepartementComponent } from './updatedepartement.component';

describe('UpdatedepartementComponent', () => {
  let component: UpdatedepartementComponent;
  let fixture: ComponentFixture<UpdatedepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
