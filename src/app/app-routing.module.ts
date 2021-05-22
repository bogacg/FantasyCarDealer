import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, PageNotFoundComponent } from './core/pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '**',
    component: PageNotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
