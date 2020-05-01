import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: Array<RecipeModel> = [
    new RecipeModel(
'Chitlins',
'Test',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS56VuX1pu27m9BdMisyA8qEWeLNyj5SZ6OuZgpycpAmKgfdqvV&usqp=CAU',
    [new IngredientModel('chitlins', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }


  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
