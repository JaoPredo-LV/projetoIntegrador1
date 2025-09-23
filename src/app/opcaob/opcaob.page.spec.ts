import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcaobPage } from './opcaob.page';

describe('OpcaobPage', () => {
  let component: OpcaobPage;
  let fixture: ComponentFixture<OpcaobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
