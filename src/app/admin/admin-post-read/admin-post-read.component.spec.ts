import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostReadComponent } from './admin-post-read.component';

describe('AdminPostReadComponent', () => {
  let component: AdminPostReadComponent;
  let fixture: ComponentFixture<AdminPostReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
