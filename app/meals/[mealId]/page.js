import React from "react";

function MealDetails({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <p>Details of {params.mealId}</p>
    </main>
  );
}

export default MealDetails;
