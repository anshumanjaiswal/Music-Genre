import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Rock: [
    { name: "Smoke on the water", year: "2006" },
    { name: "Livin' on a prayer", year: "1986" }
  ],

  Pop: [
    { name: "Watermelon sugar", year: "2019" },
    { name: "Uptown funk", year: "2014" }
  ],

  Heavymetal: [
    { name: "Rock You Like A Hurricane", year: "1984" },
    { name: "Visions", year: "1976" }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Rock");
  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>Music Genre Teller</h1>
      <p style={{ fontSize: "1rem" }}>
        Checkout some of the best songs of the following genres :
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              backgroundColor: "#FDE68A",
              borderRadius: "0.5rem",
              padding: "1rem 2rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "blue"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{music.name}</div>
              <div style={{ fontSize: "smaller" }}>{music.year}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
