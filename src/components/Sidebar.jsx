import PropTypes from "prop-types"

const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      

      {/* Want to cook table */}
      <div className="overflow-x-auto">

<h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
   Want to Cook:{recipeQueue.length}
</h2>

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {recipeQueue.map((recipe, index) => (
          <tr className="hover" key={index}>
          <th>{index + 1}</th>
          <td>{recipe.name}</td>
          <td>{recipe.preparation_time}</td>
          <td>{recipe.calories}</td>
          <td>
          <button onClick={()=>console.log('preparing')} className=" bg-green-400 rounded-full px-2 py-1 md:px-4 my-2 text-gray-800  font-medium">
            Preparing
          </button>
          </td>
        </tr>
      ))}
      
    </tbody>
  </table>
</div>

      {/* Currently cooking table */}

    </div>
  );
};

Sidebar.propTypes={
  recipeQueue: PropTypes.object
}


export default Sidebar;