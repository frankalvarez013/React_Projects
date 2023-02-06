import { useState } from "react";

const SearchParams = () => {
  //Location is a space that youre allowed to keep track of which can change based on user
  //you cant put them inside an if statement
  //All hooks start with use... like useState below;
  //useState returns an array, and its first index is location value
  // and second index contains setLocation method.
  if (true) {
    const [location, setLocation] = useState("");
  }

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
