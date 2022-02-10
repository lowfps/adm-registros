import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuncionalidadComponent } from './edit-funcionalidad.component';

describe('EditFuncionalidadComponent', () => {
  let component: EditFuncionalidadComponent;
  let fixture: ComponentFixture<EditFuncionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFuncionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFuncionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
