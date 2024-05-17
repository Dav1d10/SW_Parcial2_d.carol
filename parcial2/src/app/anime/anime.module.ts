import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeListComponent } from './anime-list/anime-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AnimeListComponent],
  declarations: [AnimeListComponent]
})
export class AnimeModule { }
