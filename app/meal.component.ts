import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal', 'isSelected'],
  directives: [EditMealDetailsComponent],
  template: `
    <h3>{{ meal.name }}</h3>
    `
})
export class MealComponent {
  public meal: Meal;
  public isSelected: boolean;
  toggleDone(setState: boolean){
    this.meal.done = setState;
  }
}
