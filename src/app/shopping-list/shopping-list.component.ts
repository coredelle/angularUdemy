import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('hendog', 5),
    new IngredientModel('hummus', 7)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}
