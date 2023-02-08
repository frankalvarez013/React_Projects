import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
//Browser Router gives "context" to all components underneath it which allow us to use useParams in Details.jsx to pass it to side store of data
// Information then gets sent to id
const Details = () => {
  const { id } = useParams();
  //Query key that is going to be provided below will be the queryKey array in fetchPet.js which will be the id
  //Also if you don't have id, use fetchPet - line below
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">1</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
