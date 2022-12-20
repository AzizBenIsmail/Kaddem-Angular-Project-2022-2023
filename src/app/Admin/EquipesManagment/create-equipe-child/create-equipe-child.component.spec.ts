import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipeChildComponent } from './create-equipe-child.component';

describe('CreateEquipeChildComponent', () => {
  let component: CreateEquipeChildComponent;
  let fixture: ComponentFixture<CreateEquipeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEquipeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
