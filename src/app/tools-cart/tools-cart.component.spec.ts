import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsCartComponent } from './tools-cart.component';

describe('ToolsCartComponent', () => {
  let component: ToolsCartComponent;
  let fixture: ComponentFixture<ToolsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
