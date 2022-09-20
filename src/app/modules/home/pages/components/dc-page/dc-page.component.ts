import { Component, OnInit } from '@angular/core';
import { Heroe } from '@modules/home/models/heroe';
import { HeroeService } from '@modules/home/service/heroe.service';

@Component({
  selector: 'app-dc-page',
  templateUrl: './dc-page.component.html',
  styleUrls: ['./dc-page.component.scss']
})
export class DcPageComponent implements OnInit {
  listDc: Heroe[] = [];
  constructor(private readonly heroeSvc: HeroeService) { }

  ngOnInit(): void {
    this.heroeSvc.getAllMarvel().subscribe(
      (resOk=>{
        this.listDc = resOk;
      })
    )
  }

}
