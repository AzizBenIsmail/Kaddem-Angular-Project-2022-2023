import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTachesComponent } from './stat-taches.component';

describe('StatTachesComponent', () => {
  let component: StatTachesComponent;
  let fixture: ComponentFixture<StatTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
