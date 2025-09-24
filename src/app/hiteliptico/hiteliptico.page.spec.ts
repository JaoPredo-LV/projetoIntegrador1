import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitelipticoPage } from './hiteliptico.page';

describe('HitelipticoPage', () => {
  let component: HitelipticoPage;
  let fixture: ComponentFixture<HitelipticoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitelipticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
