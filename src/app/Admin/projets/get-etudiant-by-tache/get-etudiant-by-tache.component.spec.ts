import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEtudiantByTacheComponent } from './get-etudiant-by-tache.component';

describe('GetEtudiantByTacheComponent', () => {
  let component: GetEtudiantByTacheComponent;
  let fixture: ComponentFixture<GetEtudiantByTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEtudiantByTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEtudiantByTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
