import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuaDocComponent } from './chua-doc.component';

describe('ChuaDocComponent', () => {
  let component: ChuaDocComponent;
  let fixture: ComponentFixture<ChuaDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuaDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
