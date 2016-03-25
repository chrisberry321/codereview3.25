import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})
// DonePipe must be able to communicate and get info from PipeTransform interface (from angular)
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieIntake = args[0];
    // boolean if/else loop that filters kegs
    if(desiredCalorieIntake === "done") {
      return input.filter((meal) => {
        return meal.done;
      });
    } else if (desiredCalorieIntake === "notDone") {
      return input.filter((meal) => {
        return !meal.done;
      });
    } else {
      return input;
    }
  }
}
// return input.filter((meal.calories))
