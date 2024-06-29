import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsCompraComponent } from './tools-compra.component';

describe('ToolsCompraComponent', () => {
  let component: ToolsCompraComponent;
  let fixture: ComponentFixture<ToolsCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
