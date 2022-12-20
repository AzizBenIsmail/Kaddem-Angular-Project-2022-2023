import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEquipeAdminMangmComponent } from './detail-equipe-admin-mangm.component';

describe('DetailEquipeAdminMangmComponent', () => {
  let component: DetailEquipeAdminMangmComponent;
  let fixture: ComponentFixture<DetailEquipeAdminMangmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEquipeAdminMangmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEquipeAdminMangmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
