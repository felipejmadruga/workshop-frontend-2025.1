"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PokemonList() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("https://api.pokemontcg.io/v2/cards");
        const data = await response.json();
        setCards(data.data.slice(0, 38)); //fiz dessa forma por que nao queria que todas as cartas da api fossem carregadas, assim consigo limitar quantas cartas quero que seja exibida na pagina principal do site.
      } catch (error) {
        console.error("Erro ao buscar cartas: ", error);
      }
    }
    fetchCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="cartas" className="flex flex-col items-center min-h-screen p-6 bg-red-600">
      
      {}
      <input
        type="text"
        className="p-3 px-5 rounded-xl text-zinc-400 font-bold w-full sm:w-80 bg-white border border-gray-300 shadow-md placeholder-gray-500 text-center mt-6"
        placeholder="Pesquise um Pokémon"
        onChange={(e) => setSearch(e.target.value)}
      />

      {}
      <div className="flex flex-wrap justify-center gap-8 py-8">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="border-4 border-black bg-blue-800 p-4 rounded-lg shadow-xl text-center max-w-xs w-full"
          >
            <h2 className="text-xl font-semibold text-white">{card.name}</h2>
            <p className="text-gray-200">
              Tipo: {card.types?.length > 0 ? card.types.join(", ") : "Desconhecido"}
            </p>
            {card.images?.large && (
              <div className="bg-white p-2 rounded-md mt-2">
                <Image
                  src={card.images.large}
                  alt={card.name}
                  width={200}
                  height={300}
                  className="mx-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}