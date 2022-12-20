import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuniversiteComponent } from './updateuniversite.component';

describe('UpdateuniversiteComponent', () => {
  let component: UpdateuniversiteComponent;
  let fixture: ComponentFixture<UpdateuniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
