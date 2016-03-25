import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

/////////////this is all in the meal.component.ts file.//////////////
// @Component({
//   selector: 'meal-display',
//   inputs: ['meal'],
//   template: `
//     <h3>{{ meal.name }}</h3>
//     `
// })
// export class MealComponent {
//   public meal: Meal;
// }



////////////////this is all in the meal-list.component.ts file//////////////
// @Component({
//   selector: 'meal-list',
//   inputs: ['mealList'],
//   outputs: ['onMealSelect'],
//   directives: [MealComponent],
//   template: `
//     <meal-display *ngFor="#currentMeal of mealList"
//       (click)="mealClicked(currentMeal)"
//       [class.selected]="currentMeal === selectedMeal"
//       [meal]="currentMeal">
//     </meal-display>
//   `
// })
//
// export class MealListComponent {
//   public mealList: Meal[];
//   public onMealSelect: EventEmitter<Meal>;
//   public selectedMeal: Meal;
//   constructor() {
//     this.onMealSelect = new EventEmitter();
//   }
//   mealClicked(clickedMeal: Meal): void {
//     console.log('child', clickedMeal);
//     this.selectedMeal = clickedMeal;
//     this.onMealSelect.emit(clickedMeal);
//   }
// }

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})


export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("chicken", "not so great", 400),
      new Meal("ice cream", "because I deserve it", 800)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}


//////////////////in the meal.model.ts file//////////////////////////
// export class Meal {
//   public done: boolean = false;
//   constructor(public name: string, public details: string, public calories: number){
//
//   }
// }
