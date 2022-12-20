import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProjetsComponent } from './get-projets.component';

describe('GetProjetsComponent', () => {
  let component: GetProjetsComponent;
  let fixture: ComponentFixture<GetProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
