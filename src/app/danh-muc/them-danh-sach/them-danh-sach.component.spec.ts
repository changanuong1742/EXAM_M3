import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemDanhSachComponent } from './them-danh-sach.component';

describe('ThemDanhSachComponent', () => {
  let component: ThemDanhSachComponent;
  let fixture: ComponentFixture<ThemDanhSachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemDanhSachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemDanhSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
