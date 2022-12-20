import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfContratsComponent } from './list-of-contrats.component';

describe('ListOfContratsComponent', () => {
  let component: ListOfContratsComponent;
  let fixture: ComponentFixture<ListOfContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
