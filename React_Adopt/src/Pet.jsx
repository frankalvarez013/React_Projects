//Since jsx is used it knows that React is being used.

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };
//------------------
//These lines above and below are the exact same.
//------------------

const Pet = (prop) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (prop.images.length) {
    hero = prop.images[0];
  }
  return (
    <a href={`/details/${prop.id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={prop.name} />
      </div>
      <div className="info">
        <h1>{prop.name}</h1>
        <h2>
          {prop.animal} - {prop.breed} - {prop.location}
        </h2>
      </div>
    </a>
  );
};
//default is how modules "work"
export default Pet;
