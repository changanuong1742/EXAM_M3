import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DanhMucService} from '../danhMuc.service';

@Component({
  selector: 'app-them-danh-sach',
  templateUrl: './them-danh-sach.component.html',
  styleUrls: ['./them-danh-sach.component.scss']
})
export class ThemDanhSachComponent implements OnInit {

  formGroup: FormGroup;
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;

  constructor(private danhMucService: DanhMucService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      read: new FormControl(),
    });
  }
  save() {
    this.isLoading = true;
    const danhMuc = this.formGroup.value;
    this.danhMucService.addDanhSach(danhMuc).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.isLoading = false;
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }
}
