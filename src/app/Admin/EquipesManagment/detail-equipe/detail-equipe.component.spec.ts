import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEquipeComponent } from './detail-equipe.component';

describe('DetailEquipeComponent', () => {
  let component: DetailEquipeComponent;
  let fixture: ComponentFixture<DetailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
