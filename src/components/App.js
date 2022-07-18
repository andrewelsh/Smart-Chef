import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "../data";
import Board from "./Board";
import recipeData from "../recipeData";

function App() {
  const mappedRecipeData = recipeData.map((data) => (
    <Board key={data.title} data={data} />
  ));

  const mappedData = data.map((x) => <Main key={x.title} x={x} />);

  return (
    <div className="App">
      <Header />
      <center>
        <p className="someSuggestions">Let's See What You Can Make !</p>

        <div className="app-flex">{mappedData}</div>

        {mappedRecipeData}
      </center>
      <Footer />
    </div>
  );
}

export default App;
