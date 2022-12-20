import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdminDevEquipesComponent } from './contact-admin-dev-equipes.component';

describe('ContactAdminDevEquipesComponent', () => {
  let component: ContactAdminDevEquipesComponent;
  let fixture: ComponentFixture<ContactAdminDevEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAdminDevEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAdminDevEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
