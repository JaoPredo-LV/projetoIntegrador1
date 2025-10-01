import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelquinzebikePage } from './nivelquinzebike.page';

describe('NivelquinzebikePage', () => {
  let component: NivelquinzebikePage;
  let fixture: ComponentFixture<NivelquinzebikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelquinzebikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
