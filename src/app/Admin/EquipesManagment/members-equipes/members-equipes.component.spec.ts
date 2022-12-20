import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersEquipesComponent } from './members-equipes.component';

describe('MembersEquipesComponent', () => {
  let component: MembersEquipesComponent;
  let fixture: ComponentFixture<MembersEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
