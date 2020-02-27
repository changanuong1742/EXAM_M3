import {Component, OnInit} from '@angular/core';
import {DanhMucService} from '../danhMuc.service';

@Component({
  selector: 'app-chua-doc',
  templateUrl: './chua-doc.component.html',
  styleUrls: ['./chua-doc.component.scss']
})
export class ChuaDocComponent implements OnInit {

  danhSachs: any[];
  constructor(private danhMucService: DanhMucService) {
  }

  ngOnInit() {
    this.danhMucService.getdanhSachs().subscribe(result => {
      this.danhSachs = result;
    });
  }

  daDoc(danhSach: any) {
    console.log(danhSach);
    this.danhMucService.daDoc(danhSach.id, danhSach.name, 'true').subscribe(
      success => {
        alert('Đã đọc thành công');
        this.ngOnInit();
      },
      error => {
        alert('Đã đọc thất bại');
      }
    );
  }
}
