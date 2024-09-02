import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import AddMealForm from "./AddMealForm";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AddMealForm />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
