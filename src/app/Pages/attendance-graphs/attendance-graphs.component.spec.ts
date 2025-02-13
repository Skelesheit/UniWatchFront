import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGraphsComponent } from './attendance-graphs.component';

describe('AttendanceGraphsComponent', () => {
  let component: AttendanceGraphsComponent;
  let fixture: ComponentFixture<AttendanceGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceGraphsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
