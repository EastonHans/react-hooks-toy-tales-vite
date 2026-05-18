import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  // Map through the toys array to create ToyCard components
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onLikeToy={onLikeToy}
    />
  ));

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
