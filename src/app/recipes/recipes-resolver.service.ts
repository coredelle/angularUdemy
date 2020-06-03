import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeModel} from '../../models/recipe.model';
import {DataStorageService} from '../shared/data-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<RecipeModel>{
  constructor(private dataStorageService: DataStorageService) {}

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeModel[]> | Promise<RecipeModel[]> | RecipeModel[] {
    return this.dataStorageService.fetchRecipes();
  }
}
