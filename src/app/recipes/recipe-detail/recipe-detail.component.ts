import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipeDetails: RecipeModel;
  constructor() { }

  ngOnInit(): void {
  }

}
