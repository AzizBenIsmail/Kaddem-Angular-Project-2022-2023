import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThreadComponent } from './update-thread.component';

describe('UpdateThreadComponent', () => {
  let component: UpdateThreadComponent;
  let fixture: ComponentFixture<UpdateThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
