import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const array = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      isShow: false,
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      isShow: false,
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      isShow: false,
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      isShow: false,
    },
    {
      id: 5,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      isShow: false,
    },
    {
      id: 6,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      isShow: false,
    },
    {
      id: 7,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      isShow: false,
    },
    {
      id: 8,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      isShow: false,
    },
    {
      id: 9,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      isShow: false,
    },
    {
      id: 10,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      isShow: false,
    },
    {
      id: 11,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      isShow: false,
    },
    {
      id: 12,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      isShow: false,
    },
    {
      id: 13,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      isShow: false,
    },
    {
      id: 14,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      isShow: false,
    },
    {
      id: 15,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      isShow: false,
    },
    {
      id: 16,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      isShow: false,
    },
  ];
  const [pokemon, setPokemon] = useState(array);
  const [moves, setMoves] = useState(0);

  function manageClick(id, isShow) {
    setMoves(moves + 1 / 2);
    const modiEmp = pokemon.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isShow: !isShow };
      }
      return obj;
    });

    setPokemon(modiEmp);
  }

  function reset() {
    setPokemon(array);
  }

  useEffect(() => {
    var arr = [];
    const isObjectPresent = pokemon.find((o) => o.isShow === true);
    if (isObjectPresent) {
      // As find return object else undefined
      arr.push(...pokemon);
    }
    
    const hello = arr.filter((data) =>  data.isShow == true ); 
    
    console.log(hello,"Hello is here")
    
    // setTimeout(() => {
    //   console.log("Hello, World!");
    // }, 3000);

  }, [pokemon]);

  return (
    <>
      <div className="pb-8 text-6xl font-bold">Gotta Catch 'Em All</div>
      <div className="text-6xl pb-8">Number of Moves : {moves}</div>
      <div className="mx-[100px] flex items-center gap-x-4 rounded-xl bg-[#242424]  p-6 shadow-lg outline outline-black/5 shadow-lg ">
        <div className="grid grid-cols-4 gap-4 ">
          {pokemon.map(({ id, image, isShow }) => {
            return (
              <div
                onClick={() => manageClick(id, isShow)}
                className="mx-auto flex w-24 h-24 bg-black text-white flex items-center justify-center rounded-xl"
                key={id}
              >
                {isShow ? (
                  <img className="mx-w-8 mx-h-8" src={image} />
                ) : (
                  <span className="text-lg">Click Me</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        onClick={() => reset()}
      >
        Reset
      </button>
    </>
  );
}

export default App;
