import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTachesComponent } from './get-taches.component';

describe('GetTachesComponent', () => {
  let component: GetTachesComponent;
  let fixture: ComponentFixture<GetTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
