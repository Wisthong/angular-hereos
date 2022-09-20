import { Component, OnInit } from '@angular/core';
import { Heroe } from '@modules/home/models/heroe';
import { HeroeService } from '@modules/home/service/heroe.service';

@Component({
  selector: 'app-marvel-page',
  templateUrl: './marvel-page.component.html',
  styleUrls: ['./marvel-page.component.scss']
})
export class MarvelPageComponent implements OnInit {
  listMarvel: Heroe[] = [];
  constructor(private readonly heroeSvc: HeroeService) { }

  ngOnInit(): void {
    this.heroeSvc.getAllMarvel().subscribe(
      (resOk=>{
        this.listMarvel = resOk;
      })
    )
  }

}
