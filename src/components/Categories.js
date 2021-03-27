import React from 'react'
import Playlists from './Playlists.js';

const Categories = () => {

  const dataCategories = [
    {
      id: 1,
      name: "Focus",
      tagline: "Music to help you concentrate",
    },
    {
      id: 2,
      name: "Mood",
      tagline: "Playlists to match your mood",
    },
    {
      id: 3,
      name: "Soundtrack your home",
      tagline: "",
    },
    {
      id: 4,
      name: "Kick back this Sunday",
      tagline: "",
    },
  ];

  return (
    <div className="mainInner">
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          <p className="subText">
            Più ascolti, più accurati saranno i suggerimenti.
          </p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
