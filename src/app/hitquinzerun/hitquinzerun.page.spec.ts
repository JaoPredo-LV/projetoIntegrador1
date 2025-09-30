import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitquinzerunPage } from './hitquinzerun.page';

describe('HitquinzerunPage', () => {
  let component: HitquinzerunPage;
  let fixture: ComponentFixture<HitquinzerunPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitquinzerunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
