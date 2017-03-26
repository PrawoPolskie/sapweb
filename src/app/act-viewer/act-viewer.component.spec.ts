import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActViewerComponent } from './act-viewer.component';

describe('ActViewerComponent', () => {
  let component: ActViewerComponent;
  let fixture: ComponentFixture<ActViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
