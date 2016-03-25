import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3> Create a new meal entry:</h3>
    <input placeholder="name" class="col-sm-8 input-lg" #newName>
    <input placeholder="details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }

}
