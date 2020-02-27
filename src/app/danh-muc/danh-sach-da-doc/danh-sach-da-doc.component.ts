import { Component, OnInit } from '@angular/core';
import {DanhMucService} from '../danhMuc.service';

@Component({
  selector: 'app-danh-sach-da-doc',
  templateUrl: './danh-sach-da-doc.component.html',
  styleUrls: ['./danh-sach-da-doc.component.scss']
})
export class DanhSachDaDocComponent implements OnInit {

  danhSachs: any[];

  constructor(private danhMucService: DanhMucService) { }

  ngOnInit(): void {
    this.danhMucService.findAll().subscribe(result => { this.danhSachs = result; });
  }




}
