import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStylerComponent } from './font-styler.component';

describe('FortStylerComponent', () => {
  let component: FontStylerComponent;
  let fixture: ComponentFixture<FontStylerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStylerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
