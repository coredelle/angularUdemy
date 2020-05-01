import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../../../models/recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected($event: MouseEvent) {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
