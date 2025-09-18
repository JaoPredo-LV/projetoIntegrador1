import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinoaPage } from './treinoa.page';

describe('TreinoaPage', () => {
  let component: TreinoaPage;
  let fixture: ComponentFixture<TreinoaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
