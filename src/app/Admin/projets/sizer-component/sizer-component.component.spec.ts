import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerComponentComponent } from './sizer-component.component';

describe('SizerComponentComponent', () => {
  let component: SizerComponentComponent;
  let fixture: ComponentFixture<SizerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
