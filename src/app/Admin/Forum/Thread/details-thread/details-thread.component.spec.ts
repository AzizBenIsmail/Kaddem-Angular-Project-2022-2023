import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsThreadComponent } from './details-thread.component';

describe('DetailsThreadComponent', () => {
  let component: DetailsThreadComponent;
  let fixture: ComponentFixture<DetailsThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
