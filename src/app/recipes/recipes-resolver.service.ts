import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeModel} from '../../models/recipe.model';
import {DataStorageService} from '../shared/data-storage.service';
import {Observable} from 'rxjs';
import {RecipeService} from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<RecipeModel>{
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeModel[]> | Promise<RecipeModel[]> | RecipeModel[] {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
