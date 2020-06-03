import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {RecipeModel} from '../../models/recipe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-complete-guide-2e7e9.firebaseio.com/recipes.json', recipes).subscribe(res => console.log(res));
  }

  fetchRecipes() {
    this.http.get<RecipeModel[]>('https://ng-complete-guide-2e7e9.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }))
      .subscribe(recipes => this.recipeService.setRecipes(recipes));
  }
}
