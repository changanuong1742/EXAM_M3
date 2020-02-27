import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDaDocComponent } from './danh-sach-da-doc.component';

describe('DanhSachDaDocComponent', () => {
  let component: DanhSachDaDocComponent;
  let fixture: ComponentFixture<DanhSachDaDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDaDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
