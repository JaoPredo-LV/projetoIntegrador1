import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrcquinzeeliPage } from './trcquinzeeli.page';

describe('TrcquinzeeliPage', () => {
  let component: TrcquinzeeliPage;
  let fixture: ComponentFixture<TrcquinzeeliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcquinzeeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
