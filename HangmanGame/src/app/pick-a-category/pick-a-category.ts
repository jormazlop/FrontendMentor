import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackButton } from '@shared/components/back-button/back-button';
import { Title } from './title/title';
import { CategoryButton } from '@shared/components/category-button/category-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-a-category',
  imports: [BackButton, Title, CategoryButton],
  templateUrl: './pick-a-category.html',
  styleUrl: './pick-a-category.scss'
})
export default class PickACategory {

  private readonly location = inject(Location);
  private readonly router = inject(Router);

  goBack(): void {
    this.router.navigate(['../']);
  }

  goToCategorie(categorie: string): void {
    this.router.navigate(['categorie', categorie]);
  }
}
