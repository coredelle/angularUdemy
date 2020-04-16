import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<RecipeModel> = [
    new RecipeModel('Chitlins', 'Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS56VuX1pu27m9BdMisyA8qEWeLNyj5SZ6OuZgpycpAmKgfdqvV&usqp=CAU')
  ];
  @Output() selectedRecipeInfo = new EventEmitter<RecipeModel>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedRecipe(recipeElement: RecipeModel) {
    this.selectedRecipeInfo.emit(recipeElement);
  }
}
