import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjetComponent } from './update-projet.component';

describe('UpdateProjetComponent', () => {
  let component: UpdateProjetComponent;
  let fixture: ComponentFixture<UpdateProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
