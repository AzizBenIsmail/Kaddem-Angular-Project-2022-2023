import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesFrontComponent } from './taches-front.component';

describe('TachesFrontComponent', () => {
  let component: TachesFrontComponent;
  let fixture: ComponentFixture<TachesFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachesFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
