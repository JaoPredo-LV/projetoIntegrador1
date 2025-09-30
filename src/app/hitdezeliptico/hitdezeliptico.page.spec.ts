import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitdezelipticoPage } from './hitdezeliptico.page';

describe('HitdezelipticoPage', () => {
  let component: HitdezelipticoPage;
  let fixture: ComponentFixture<HitdezelipticoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitdezelipticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
