import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipeComponent } from './create-equipe.component';

describe('CreateEquipeComponent', () => {
  let component: CreateEquipeComponent;
  let fixture: ComponentFixture<CreateEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
