import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoProfessorComponent } from './cabecalho-professor.component';

describe('CabecalhoProfessorComponent', () => {
  let component: CabecalhoProfessorComponent;
  let fixture: ComponentFixture<CabecalhoProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
