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

    if (recipes.sort().join("") == recipeData[0].inc.sort().join("")) {
      document.getElementById(
        "board"
      ).outerHTML = `<img src="https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1-698x1024.jpg" alt="Girl in a jacket" width="300" height="200">`;
    }
    document.getElementById("board").outerHTML = "";

    if (recipes.sort().join("") == recipeData[1].inc.sort().join("")) {
      document.getElementById(
        "board"
      ).outerHTML = `<img src=" https://i.etsystatic.com/24708295/r/il/323fde/3513312575/il_794xN.3513312575_q4ag.jpg" alt="Girl in a jacket" width="300" height="200">`;
    }
    if (recipes.sort().join("") == recipeData[2].inc.sort().join("")) {
      console.log("matched French Toast");
    }

    // if (recipeData[0].inc == recipes[0]) {
    //   console.log("Matched");
    // }

    // if (props.x.title === recipes[1]) {
    //   console.log(`Matched ${props.x.title}`);
    // }

    btnColorChange();
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
