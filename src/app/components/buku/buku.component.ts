import { Component, OnInit } from '@angular/core';
import { BukuService } from 'src/app/service/buku/buku.service';

import { Buku } from 'src/app/model/buku';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  buku: Buku[] = [];
  jmlBuku = 0;
  selectedBuku? : Buku;

  constructor(
    private bukuService: BukuService,
    private msgSvc : MessageService 
    ) { }

  ngOnInit(): void {
    // alert(this.bukuService.test());
    //this.buku = (this.bukuService.testDataBuku());
    //this.jmlBuku=this.buku.length;
    //this.bukuService.getData();
    // this.getAllBuku();
    // this.jmlBuku = this.buku.length;
  }
  getAllBuku(): void{
    this.bukuService.getAllBukuObservable().subscribe(returnData => this.buku=returnData);
  }

  delete(bukuId : any) : void {
    this.msgSvc.add("Deleting buku with id=" + bukuId);
    this.bukuService.deleteBuku(bukuId).subscribe();

  }
  onSelectBuku(buku : Buku){
    this.selectedBuku = buku;
  }
}
    //this.getAllBuku();

    //this.jmlBuku = this.buku.length;
    //console.log("buku", this.buku);

  //}

  //getAllBuku() {
    //this.bukuService.getAllBuku().subscribe(result => this.buku = result); 
