// AddMealForm.js
import { useState, useContext } from "react";
import CartContext from "../store/cart-context"; // Ensure the path is correct
import "./AddMealForm.css";

const AddMealForm = () => {
  // Use the context to get the addMeal function
  const { addMeal } = useContext(CartContext);

  // State for form inputs
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealPrice, setMealPrice] = useState("");

  // Form submission handler
  const submitHandler = (event) => {
    event.preventDefault();

    // Construct the new meal object
    const newMeal = {
      id: Math.random().toString(), // Generate a unique ID
      name: mealName,
      description: mealDescription,
      price: parseFloat(mealPrice),
    };

    // Call the context function to add the new meal
    addMeal(newMeal);

    // Reset form inputs
    setMealName("");
    setMealDescription("");
    setMealPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Candy Name</label>
        <input
          type="text"
          id="name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={mealDescription}
          onChange={(e) => setMealDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={mealPrice}
          onChange={(e) => setMealPrice(e.target.value)}
        />
      </div>
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default AddMealForm;
