import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part11Component } from './part11.component';

describe('Part11Component', () => {
  let component: Part11Component;
  let fixture: ComponentFixture<Part11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
