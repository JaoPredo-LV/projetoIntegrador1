import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitvintebikePage } from './hitvintebike.page';

describe('HitvintebikePage', () => {
  let component: HitvintebikePage;
  let fixture: ComponentFixture<HitvintebikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitvintebikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
