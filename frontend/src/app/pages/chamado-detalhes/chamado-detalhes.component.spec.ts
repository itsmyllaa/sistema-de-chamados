import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoDetalhesComponent } from './chamado-detalhes.component';

describe('ChamadoDetalhesComponent', () => {
  let component: ChamadoDetalhesComponent;
  let fixture: ComponentFixture<ChamadoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
