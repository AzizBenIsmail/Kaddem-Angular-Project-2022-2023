import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThreadComponent } from './list-thread.component';

describe('ListThreadComponent', () => {
  let component: ListThreadComponent;
  let fixture: ComponentFixture<ListThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
