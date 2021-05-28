import React from "react";
import "./ShareYourLocation.css";

export const ShareYourLocation = () => {
  return (
    <section className="container-share-your-location">
      <div className="container-text">
        <h3 className="font-64-regular">ShareYourLocation</h3>
        <p className="font-24-regular">
          Do qui ad qui adipisicing sunt deserunt ut cupidatat. Consectetur ad
          irure enim officia ea tempor eiusmod commodo. Culpa ex et eiusmod
          laborum pariatur esse tempor dolor proident quis ipsum consectetur
          culpa. Excepteur ad sit irure exercitation est adipisicing. Culpa
          exercitation id nostrud laborum ipsum commodo eu commodo veniam elit
          ullamco laborum sit nostrud.
        </p>
      </div>
      <img
        src="/share-your-location.png"
        alt="Share your location image"
        className="share-your-location-img"
      />
    </section>
  );
};
