import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '@modules/home/models/heroe';
import { HeroeService } from '@modules/home/service/heroe.service';

@Component({
  selector: 'app-details-heroe-page',
  templateUrl: './details-heroe-page.component.html',
  styleUrls: ['./details-heroe-page.component.scss']
})
export class DetailsHeroePageComponent implements OnInit {
  hereo!:Heroe;
  id!: string | null;
  constructor(
    private readonly hereoSvc: HeroeService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.hereoSvc.detailsHeroe(this.id).subscribe(
      (resOk=>{
        this.hereo = resOk;
        console.log(this.hereo);

      })
    )
  }

}
