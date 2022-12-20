import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfReclaimsComponent } from './list-of-reclaims.component';

describe('ListOfReclaimsComponent', () => {
  let component: ListOfReclaimsComponent;
  let fixture: ComponentFixture<ListOfReclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfReclaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfReclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
