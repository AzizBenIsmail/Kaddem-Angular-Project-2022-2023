import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReponseComponent } from './create-reponse.component';

describe('CreateReponseComponent', () => {
  let component: CreateReponseComponent;
  let fixture: ComponentFixture<CreateReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
