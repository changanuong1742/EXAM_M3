import {Component, Injectable, OnInit} from '@angular/core';
import {DanhMucService} from '../danhMuc.service';


@Component({
  selector: 'app-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss']
})
export class DanhSachComponent implements OnInit {

  danhSachs: any[];

  constructor(private danhMucService: DanhMucService) {
  }

  ngOnInit() {
    this.danhMucService.getdanhSachs().subscribe(result => {
      this.danhSachs = result;
    });
  }
}
