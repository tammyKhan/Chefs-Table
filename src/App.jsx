import PreviousMap from "postcss/lib/previous-map";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


const App = () => {

const [recipeQueue, setRecipeQueue] = useState([])

const addRecipeToQueue = recipe => {
  const isExist = recipeQueue.find(
    previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
  )
  if(!isExist){
    setRecipeQueue([...recipeQueue, recipe])
  } else {
    alert('Recipe already exists in the queue')
  }

}
console.log(recipeQueue)

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Sections */}
      <OurRecipes></OurRecipes>

    {/* Dynamic Section */}
    <section className="flex flex-col md:flex-row gap-6 ">
      {/* Cards Section */}
      <Recipes addRecipeToQueue={addRecipeToQueue} />

      {/* SideBar */}
      <Sidebar recipeQueue={recipeQueue} />

    </section>

    </div>
  );
};

export default App;