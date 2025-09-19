import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinobPage } from './treinob.page';

describe('TreinobPage', () => {
  let component: TreinobPage;
  let fixture: ComponentFixture<TreinobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});