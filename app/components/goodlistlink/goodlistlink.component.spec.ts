import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodlistlinkComponent } from './goodlistlink.component';

describe('GoodlistlinkComponent', () => {
  let component: GoodlistlinkComponent;
  let fixture: ComponentFixture<GoodlistlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodlistlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodlistlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
