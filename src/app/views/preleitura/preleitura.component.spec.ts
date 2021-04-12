import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleituraComponent } from './preleitura.component';

describe('PreleituraComponent', () => {
  let component: PreleituraComponent;
  let fixture: ComponentFixture<PreleituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreleituraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
