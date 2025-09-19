import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ESenhaPage } from './esenha.page';

describe('ESenhaPage', () => {
  let component: ESenhaPage;
  let fixture: ComponentFixture<ESenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ESenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
