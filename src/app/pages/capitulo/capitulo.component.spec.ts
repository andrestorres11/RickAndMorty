import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloComponent } from './capitulo.component';

describe('CapituloComponent', () => {
  let component: CapituloComponent;
  let fixture: ComponentFixture<CapituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
