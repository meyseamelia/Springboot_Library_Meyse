import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Buku } from 'src/app/model/buku';
import { bukuSample } from 'src/app/buku-sample';
import { MessageService } from '../message/message.service';

//import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  buku: Buku[] = bukuSample;
  svcUrl = 'http://localhost:8888/buku/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  test(): String {
    return "Test BukuService";
  }
  testDataBuku(): Buku[] {
    return this.buku;
  }

  getAllBuku() {
    return bukuSample;
  }
  
  getAllBukuObservable(): Observable<Buku[]> {
    const dataBuku = this.httpClient.get<Buku[]>(this.svcUrl).pipe(
      tap(result => this.msgSvc.add('BukuService.getAllBuku() : Buku berhasil diload dari webservice!')),
      catchError(this.msgSvc.handleError<Buku[]>('getAllBuku failed', []))
    );

    return dataBuku;
  }
  updateBuku(buku: Buku): Observable<any> {
    const svcUrl = this.svcUrl + buku.id;

    return this.httpClient.put(svcUrl, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.updateBuku() : Buku berhasil di Update dari Webservice!')),
      catchError(this.msgSvc.handleError<Buku[]>('updateBuku failed', []))
    );
  }
  addBuku(buku: Buku): Observable<any> {
    return this.httpClient.post(this.svcUrl, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.getAllBuku() : Buku berhasil diupdate dari webservice!')),
      catchError(this.msgSvc.handleError<Buku[]>('addBuku failed', []))
    );
  }
  deleteBuku(bukuId: any): Observable<any> {
    return this.httpClient.delete(this.svcUrl + bukuId).pipe(
      tap((result) =>
        this.msgSvc.add(
          'BukuService.updateBuku() : Buku baru berhasil di hapus!'
        )
      ),
      catchError(this.msgSvc.handleError<Buku[]>('deleteBuku failed', []))
    );
  }
}

  // testDataBuku(): Buku[]{
  //   //console.log(this.buku);
  //   return this.buku;
  // getData(){
  //   //Configure HTTP Request
  //   this.request.open ("GET", this.url);
  //   //send request
  //   this.request.send();

  //   //proses HTTP response success
  //   this.request.onload=function(e){
  //     let result = this.response;
  //     //parsing response JSON data as array
  //     console.log("result" , result);
  //     return result;

     // document.getElementById("data")?.innerHTML += "<li>ID: "+item.id+"; Judul:"+item
    //proses HTTP response error
    // this.request.onerror=function(e){
    //   console.log("error", request.response);
  // getAllBukuSamples() : Buku[]{
  //   this msgSvc.add("BukuService.getAllBukuSamples() : Data buku diambil dari Mock-Up Data");
  //   return bukuSamples;