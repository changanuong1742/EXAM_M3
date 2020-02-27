import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhMucRoutingModule } from './danh-muc-routing.module';
import { DanhMucComponent } from './danh-muc.component';
import { DanhSachComponent } from './danh-sach/danh-sach.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DanhMucService} from './danhMuc.service';
import { ThemDanhSachComponent } from './them-danh-sach/them-danh-sach.component';
import { DanhSachDaDocComponent } from './danh-sach-da-doc/danh-sach-da-doc.component';
import { ChuaDocComponent } from './chua-doc/chua-doc.component';


@NgModule({
  declarations: [DanhMucComponent, DanhSachComponent, ThemDanhSachComponent, DanhSachDaDocComponent, ChuaDocComponent],
  imports: [
    CommonModule,
    DanhMucRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DanhMucService]
})
export class DanhMucModule { }
