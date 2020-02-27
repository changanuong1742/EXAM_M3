import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanhMucComponent } from './danh-muc.component';
import {DanhSachComponent} from './danh-sach/danh-sach.component';
import {ThemDanhSachComponent} from './them-danh-sach/them-danh-sach.component';
import {DanhSachDaDocComponent} from './danh-sach-da-doc/danh-sach-da-doc.component';
import {ChuaDocComponent} from './chua-doc/chua-doc.component';

const routes: Routes = [{ path: 'danhMuc', component: DanhMucComponent },
  { path: 'danhSach', component: DanhSachComponent },
  { path: 'themDanhSach', component: ThemDanhSachComponent },
  { path: 'danhSachDoc', component: DanhSachDaDocComponent },
  { path: 'danhSachChuaDoc', component: ChuaDocComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhMucRoutingModule { }
