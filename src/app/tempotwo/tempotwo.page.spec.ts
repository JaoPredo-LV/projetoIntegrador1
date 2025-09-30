import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempotwoPage } from './tempotwo.page';

describe('TempotwoPage', () => {
  let component: TempotwoPage;
  let fixture: ComponentFixture<TempotwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TempotwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
