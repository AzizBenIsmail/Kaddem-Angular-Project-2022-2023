import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesAdminManagmentComponent } from './equipes-admin-managment.component';

describe('EquipesAdminManagmentComponent', () => {
  let component: EquipesAdminManagmentComponent;
  let fixture: ComponentFixture<EquipesAdminManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipesAdminManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipesAdminManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
