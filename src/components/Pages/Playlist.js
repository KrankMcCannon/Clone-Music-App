import React from 'react'
import { ReactComponent as PlayIcon } from "../../svgs/play.svg";
import { ReactComponent as HeartIcon } from "../../svgs/heart.svg";
import { ReactComponent as NoteIcon } from "../../svgs/note.svg";

const PlaylistPage = () => {

  const songPlaylists = [
    {
      id: 10,
      name: "Chiuso in una scatola",
      author: "883",
      time: "2:56",
    },
    {
      id: 11,
      name: "Come deve andare",
      author: "883",
      time: "4:36",
    },
    {
      id: 12,
      name: "Gli Anni",
      author: "883",
      time: "4:34",
    },
    {
      id: 13,
      name: "Il mondo insieme a te",
      author: "883",
      time: "4:01",
    },
    {
      id: 14,
      name: "La regina del Celebrità",
      author: "883",
      time: "3:54",
    },
    {
      id: 15,
      name: "Ti sento vivere",
      author: "883",
      time: "3:54",
    },
  ];

  // const splitSong = (songPlaylists) => {
  //   let str = songPlaylists.time;
  //   console.log(str);
  //   for (let i = 0; i < songPlaylists.length; i++) {
  //     const splitted = songPlaylists[i];
  //     let res = str.split(":");
  //     console.log(splitted(res));
  //   }
  // }

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1469881317953-097ae79770ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText upperCase bold">Playlist</p>
            <h1>A Tutto MAX</h1>
            <p className="tagline">
              Le migliori canzoni degli 883 in una raccolta esclusiva!
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>{songPlaylists.length} brani</span>
              <span>22min 35sec</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>
          <ul className="songList">
            {songPlaylists.map((song, id) => (
              <li key={id}>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>{song.name}</h3>
                  <span className="smallText">{song.author}</span>
                </div>
                <div className="songTime">
                  <span>{song.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
