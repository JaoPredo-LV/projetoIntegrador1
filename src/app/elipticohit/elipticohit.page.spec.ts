import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElipticohitPage } from './elipticohit.page';

describe('ElipticohitPage', () => {
  let component: ElipticohitPage;
  let fixture: ComponentFixture<ElipticohitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElipticohitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
