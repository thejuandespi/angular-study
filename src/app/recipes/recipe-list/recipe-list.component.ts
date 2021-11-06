import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simpyply a test', `https://live.staticflickr.com/65535/51129289518_94009afae3_n.jpg`),
    new Recipe('A test recipe', 'This is simpyply a test', `https://live.staticflickr.com/65535/51129289518_94009afae3_n.jpg`),
    new Recipe('A test recipe', 'This is simpyply a test', `https://live.staticflickr.com/65535/51129289518_94009afae3_n.jpg`)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
