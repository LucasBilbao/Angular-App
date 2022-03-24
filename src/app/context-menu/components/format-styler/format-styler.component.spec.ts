import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatStylerComponent } from './format-styler.component';

describe('FortStylerComponent', () => {
  let component: FormatStylerComponent;
  let fixture: ComponentFixture<FormatStylerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatStylerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatStylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
