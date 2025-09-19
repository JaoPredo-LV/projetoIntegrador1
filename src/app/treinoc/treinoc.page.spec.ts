import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinocPage } from './treinoc.page';

describe('TreinocPage', () => {
  let component: TreinocPage;
  let fixture: ComponentFixture<TreinocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
