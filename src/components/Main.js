import React from "react";
import recipeData from "../recipeData";

let recipes = [];

// This Hook allows for the state to change
const Main = (props) => {
  const [now, setButtonSelected] = React.useState(props.x.title);

  // This function is an IF statement that says "if a checkmark is currently displayed, then revert back to the default color"
  function handle_setButtonSelected() {
    now === "✓" ? setButtonSelected(props.x.title) : setButtonSelected("✓");
    now === "✓" ? recipes.pop() : recipes.push(props.x.title);

    btnColorChange();
    for (let i = 0; i < recipeData.length; i++) {
      if (recipeData[i].inc.every((data) => recipes.includes(data))) {
        document.getElementById(
          "board"
        ).innerHTML = `<h4>${recipeData[i].title}</h4><a href = ${recipeData[i].image} > <img src = ${recipeData[i].image} /> </a>`;

        // console.log(recipeData[i].title);
      }
    }
  }
  // End of IF Statement

  // This changes the color of the food items from default to green.
  function btnColorChange() {
    if (now === "✓") {
      document.getElementById(props.x.id).style.backgroundColor = "transparent";
    } else {
      document.getElementById(props.x.id).style.backgroundColor = "#19e61980";
    }
  }

  return (
    // JSX
    <div className="main">
      <button id={props.x.id} onClick={handle_setButtonSelected}>
        {now}
      </button>
    </div>
  );
};

export default Main;
