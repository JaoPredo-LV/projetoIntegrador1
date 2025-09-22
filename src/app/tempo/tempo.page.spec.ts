import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempoPage } from './tempo.page';

describe('TempoPage', () => {
  let component: TempoPage;
  let fixture: ComponentFixture<TempoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
