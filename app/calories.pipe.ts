import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calories = args[0];
    if(calories === "lessThan290") {
      return input.filter((meal) => {
        return meal.calories<= 290;
      });
    } else if (calories === "moreThan290") {
      return input.filter((meal) => {
        return meal.calories > 291;
      });
    } else {
      return input;
    }
  }
}
