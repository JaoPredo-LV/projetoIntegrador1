import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiteliptcoPage } from './hiteliptco.page';

describe('HiteliptcoPage', () => {
  let component: HiteliptcoPage;
  let fixture: ComponentFixture<HiteliptcoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HiteliptcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
