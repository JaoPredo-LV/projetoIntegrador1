import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelvintebikePage } from './nivelvintebike.page';

describe('NivelvintebikePage', () => {
  let component: NivelvintebikePage;
  let fixture: ComponentFixture<NivelvintebikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelvintebikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
