import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { MarvelPageComponent } from './pages/components/marvel-page/marvel-page.component';
import { DcPageComponent } from './pages/components/dc-page/dc-page.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { DetailsHeroePageComponent } from './pages/components/details-heroe-page/details-heroe-page.component';
import { FooterPageComponent } from './pages/components/footer-page/footer-page.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    MarvelPageComponent,
    DcPageComponent,
    NavbarComponent,
    DetailsHeroePageComponent,
    FooterPageComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
