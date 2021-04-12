import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosleituraComponent } from './posleitura.component';

describe('PosleituraComponent', () => {
  let component: PosleituraComponent;
  let fixture: ComponentFixture<PosleituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosleituraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
