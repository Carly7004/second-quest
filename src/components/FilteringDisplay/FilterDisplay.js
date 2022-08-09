import React, { useState } from "react";

function FilterDisplay() {
  const [chosenGenre, setChosenGenre] = useState("science-fiction");
  const [movieList, setMovieList] = useState([
    { title: "Avatar", genre: "science-fiction" },
    { title: "Black Swan", genre: "drama" },
    { title: "Inception", genre: "science-fiction" },
    { title: "Moonlight", genre: "drama" },
  ]);

//   const filterMovies = () => {
//     movieList.filter((movie) => movie.genre === chosenGenre)
//   }
  return (
    <div>
      <h3>All movies</h3>
      <div>
        {movieList.map((movie) => (
          <button key={movie.title}>
            {movie.title} ({movie.genre})
          </button>
        ))}
      </div>
      <h3>
        All Movies in <em>{chosenGenre}</em>
      </h3>
      <div>
        {movieList
          .filter((movie) => movie.genre === chosenGenre)
          .map((movie) => (
            <button key={movie.title}>
              {movie.title} ({movie.genre})
            </button>
          ))}
      </div>
    </div>
  );
}

export default FilterDisplay;

// vanila JS

// let image_template = document.getElementById('image-template');

// function show_file_previews( e ){
//     let file_element = e.target;
//     // let files = e.target.files;
//     let files = file_element.files;
//     let object_url = null, div = null;

//     image_template.innerHTML = "";
//     if( files.length ){
//         for( let index in files ){

//             if( files[index] instanceof File ){

//                 object_url = URL.createObjectURL( files[index] );

//                 div = document.createElement('DIV');
//                 div.innerHTML = `
//                     <img src="${object_url}" class="img-small" >
//                 `;
//                 image_template.appendChild( div );
//             }

//         }
//     }
// }

// export default show_file_previews;
