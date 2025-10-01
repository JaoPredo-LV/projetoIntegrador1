import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitesteiraPage } from './hitesteira.page';

describe('HitesteiraPage', () => {
  let component: HitesteiraPage;
  let fixture: ComponentFixture<HitesteiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitesteiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
