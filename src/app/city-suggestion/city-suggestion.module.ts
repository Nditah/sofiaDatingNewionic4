import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CitySuggestionPage } from './city-suggestion.page';

const routes: Routes = [
  {
    path: '',
    component: CitySuggestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CitySuggestionPage]
})
export class CitySuggestionPageModule {}
