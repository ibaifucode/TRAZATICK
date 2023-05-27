import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaeeTipoLecturaFilterComponent } from './raee-tipo-lectura-filter.component';

describe('RaeeTipoLecturaFilterComponent', () => {
  let component: RaeeTipoLecturaFilterComponent;
  let fixture: ComponentFixture<RaeeTipoLecturaFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaeeTipoLecturaFilterComponent]
    });
    fixture = TestBed.createComponent(RaeeTipoLecturaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
