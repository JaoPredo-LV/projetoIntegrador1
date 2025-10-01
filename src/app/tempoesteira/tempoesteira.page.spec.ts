import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempoesteiraPage } from './tempoesteira.page';

describe('TempoesteiraPage', () => {
  let component: TempoesteiraPage;
  let fixture: ComponentFixture<TempoesteiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoesteiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
