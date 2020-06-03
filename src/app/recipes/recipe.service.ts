import {Injectable} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  private recipes: Array<RecipeModel> = [
//     new RecipeModel(
// 'Chitlins',
// 'Test',
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS56VuX1pu27m9BdMisyA8qEWeLNyj5SZ6OuZgpycpAmKgfdqvV&usqp=CAU',
//     [new IngredientModel('chitlins', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: RecipeModel) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
