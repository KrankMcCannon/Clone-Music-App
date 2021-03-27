import React from 'react'
import {Link} from 'react-router-dom';

const Playlists = (props) => {

  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home playlist 1",
      img:
        "https://images.unsplash.com/photo-1469881317953-097ae79770ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
    {
      id: 102,
      category_id: 3,
      name: "Home playlist 2",
      img:
        "https://images.unsplash.com/photo-1550041771-aef92f14a6d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1570246159995-57eaeeca884b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus playlist 1",
      img:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sunday playlist 1",
      img:
        "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1108&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood playlist 1",
      img:
        "https://images.unsplash.com/photo-1582634424802-b4a94fcfbce6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood playlist 2",
      img:
        "https://images.unsplash.com/photo-1495395226200-8fbf6b720b8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80",
      description: "Nek, Max Pezzali, 883 e altro",
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id);

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.description}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Playlists;
