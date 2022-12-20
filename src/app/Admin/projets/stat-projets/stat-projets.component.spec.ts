import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProjetsComponent } from './stat-projets.component';

describe('StatProjetsComponent', () => {
  let component: StatProjetsComponent;
  let fixture: ComponentFixture<StatProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatProjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
