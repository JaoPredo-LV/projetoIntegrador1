import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinoQuestionarioPage } from './treino-questionario.page';

describe('TreinoQuestionarioPage', () => {
  let component: TreinoQuestionarioPage;
  let fixture: ComponentFixture<TreinoQuestionarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoQuestionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
