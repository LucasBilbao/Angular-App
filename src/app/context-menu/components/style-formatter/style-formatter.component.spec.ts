import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleFormatterComponent } from './style-formatter.component';

describe('StyleFormaterComponent', () => {
  let component: StyleFormatterComponent;
  let fixture: ComponentFixture<StyleFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
