import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAboutComponent } from './tools-about.component';

describe('ToolsAboutComponent', () => {
  let component: ToolsAboutComponent;
  let fixture: ComponentFixture<ToolsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
