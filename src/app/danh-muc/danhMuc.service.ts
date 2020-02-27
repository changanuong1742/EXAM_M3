import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DanhMucService {

  apiUrl = 'http://localhost:8081/books';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  getdanhSachs(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8081/books`);
  }

  public addDanhSach(danhSach: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, danhSach);
  }

  daDoc(id: number, name: string, read: string): Observable<any> {
    const danhSach = {
      id,
      name,
      read
    };
    console.log(danhSach);
    return this.httpClient.put<any>(this.apiUrl, danhSach);
  }

}
