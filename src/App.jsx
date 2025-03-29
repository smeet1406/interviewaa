import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const array = [
    { id: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", isShow: false, matched: false },
    { id: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", isShow: false, matched: false },
    { id: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", isShow: false, matched: false },
    { id: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", isShow: false, matched: false },
    { id: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", isShow: false, matched: false },
    { id: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", isShow: false, matched: false },
    { id: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", isShow: false, matched: false },
    { id: 8, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", isShow: false, matched: false },
    { id: 9, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", isShow: false, matched: false },
    { id: 10, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", isShow: false, matched: false },
    { id: 11, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", isShow: false, matched: false },
    { id: 12, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", isShow: false, matched: false },
    { id: 13, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", isShow: false, matched: false },
    { id: 14, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", isShow: false, matched: false },
    { id: 15, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", isShow: false, matched: false },
    { id: 16, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", isShow: false, matched: false },
  ];

  const [pokemon, setPokemon] = useState(array);
  const [moves, setMoves] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function manageClick(card) {
    if (disabled || card.isShow) return;
    
    if (!firstChoice) {
      setFirstChoice(card);
      const updatedCards = pokemon.map((c) =>
        c.id === card.id ? { ...c, isShow: true } : c
      );
      setPokemon(updatedCards);
    } else if (!secondChoice && firstChoice.id !== card.id) {
      setSecondChoice(card);
      const updatedCards = pokemon.map((c) =>
        c.id === card.id ? { ...c, isShow: true } : c
      );
      setPokemon(updatedCards);
      setMoves(prev => prev + 1);
    }
  }

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.image === secondChoice.image) {
        setPokemon(prevCards => {
          return prevCards.map(card => {
            if (card.image === firstChoice.image) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          setPokemon(prevCards => {
            return prevCards.map(card => {
              if (!card.matched) {
                return { ...card, isShow: false };
              }
              return card;
            });
          });
          resetTurn();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  function resetTurn() {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  }

  function reset() {
    setPokemon(array);
    setMoves(0);
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  }

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center border-emerald-300">
      <div className="w-full max-w-3xl mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Gotta Catch 'Em All
        </h1>
        <div className="bg-gray-800 px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(0,255,157,0.3)] border border-emerald-300 mb-8">
          <span className="text-4xl text-emerald-400">Moves: {moves}</span>
        </div>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,157,0.2)] border border-emerald-100">
          <div className="grid grid-cols-4 gap-3">
            {pokemon.map((card) => (
              <div
                onClick={() => manageClick(card)}
                className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] perspective-1000 cursor-pointer group"
                key={card.id}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${card.isShow ? 'rotate-y-180' : ''}`}>
                  {/* Front of card */}
                  <div className="absolute w-full h-full flex items-center justify-center rounded-xl bg-gray-900 border-2 border-emerald-400 shadow-[0_0_10px_rgba(0,255,157,0.3)] backface-hidden group-hover:shadow-[0_0_20px_rgba(0,255,157,0.5)]">
                    <span className="text-5xl text-emerald-400 font-bold">?</span>
                  </div>
                  {/* Back of card */}
                  <div className="absolute w-full h-full flex items-center justify-center rounded-xl bg-white border-2 border-emerald-400 shadow-[0_0_10px_rgba(0,255,157,0.3)] backface-hidden rotate-y-180">
                    <img className="w-16 h-16 sm:w-20 sm:h-20" src={card.image} alt="pokemon" />
                    {card.matched && (
                      <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="mt-10 px-8 py-3 text-lg font-bold text-white bg-emerald-500 rounded-xl shadow-lg 
                     transform transition-all duration-300 hover:scale-105 hover:bg-emerald-600 
                     hover:shadow-[0_0_20px_rgba(0,255,157,0.5)]"
          onClick={reset}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
