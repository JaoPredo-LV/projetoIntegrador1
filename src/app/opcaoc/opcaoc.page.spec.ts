import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcaocPage } from './opcaoc.page';

describe('OpcaocPage', () => {
  let component: OpcaocPage;
  let fixture: ComponentFixture<OpcaocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
