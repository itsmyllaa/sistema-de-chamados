import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosListaComponent } from './chamados-lista.component';

describe('ChamadosListaComponent', () => {
  let component: ChamadosListaComponent;
  let fixture: ComponentFixture<ChamadosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
