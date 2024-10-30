import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";



const App = () => {

const [recipeQueue, setRecipeQueue] = useState([])
const [preparedRecipe, setPreparedRecipe] = useState([])
const [totalTime, setTotalTime] = useState(0)
const [totalCalories, setTotalCalories] = useState(0)


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

const handleRemove = id => {
  // find which recipe to remove
  const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id )

  // remove from Want to Cook table
  const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id )
  setRecipeQueue(updatedQueue)

  setPreparedRecipe([...preparedRecipe, deletedRecipe])

}

const calculate = (time, calorie) => {
  setTotalTime(totalTime + time)
  setTotalCalories(totalCalories + calorie)
}

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
      <Sidebar
      calculate={calculate} 
      handleRemove={handleRemove}
      recipeQueue={recipeQueue}
      preparedRecipe={preparedRecipe}
      totalTime={totalTime}
      totalCalories={totalCalories}
      />

    </section>

    </div>
  );
};

export default App;