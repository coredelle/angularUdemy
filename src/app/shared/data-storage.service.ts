import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {RecipeModel} from '../../models/recipe.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-complete-guide-2e7e9.firebaseio.com/recipes.json', recipes).subscribe(res => console.log(res));
  }

  fetchRecipes() {
    // using (take) here allows for taking one value from the subscription then immediately unsubscribing after
    return this.authService.user.pipe(take(1),
      exhaustMap(user => {
        return this.http.get<RecipeModel[]>('https://ng-complete-guide-2e7e9.firebaseio.com/recipes.json',
          {
            params: new HttpParams().set('auth', user.token)
          });
    }),
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
        tap(recipes => this.recipeService.setRecipes(recipes))
      );
  }
}
