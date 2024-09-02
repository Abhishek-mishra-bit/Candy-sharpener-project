import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Candy, Delivered To You</h2>
      <p>
        Choose your favorite candy from our broad selection of available candy
        and enjoy a delicious sweet at home.
      </p>
      <p>
        All our candies are maked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
