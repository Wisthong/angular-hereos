import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { DcPageComponent } from './pages/components/dc-page/dc-page.component';
import { DetailsHeroePageComponent } from './pages/components/details-heroe-page/details-heroe-page.component';
import { MarvelPageComponent } from './pages/components/marvel-page/marvel-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path:'',
    component: HomePagesComponent,
    title: 'Marvel & DC',
  },
  {
    path:'dc',
    component: DcPageComponent,
    title: 'DC',
  },
  {
    path:'marvel',
    component: MarvelPageComponent,
    title: 'Marvel',
  },
  {
    path:'details/:id',
    component: DetailsHeroePageComponent,
    title: 'Details Heroe',
  },
  {
    path: '**',
    component: ErrorPageComponent,
    title: 'Error Page',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
