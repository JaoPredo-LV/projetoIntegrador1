import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcaoaPage } from './opcaoa.page';

describe('OpcaoaPage', () => {
  let component: OpcaoaPage;
  let fixture: ComponentFixture<OpcaoaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
