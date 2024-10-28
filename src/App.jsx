import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";



const App = () => {
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
      <Recipes/>

      {/* SideBar */}
      <Sidebar/>

    </section>

    </div>
  );
};

export default App;