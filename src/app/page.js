"use client";

import Header from "@/app/Componentes/Header/Header";
import PokemonList from "@/app/Componentes/PokemonList/PokemonList";
import Carousel from "@/app/Componentes/Carrossel/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 bg-red-600 min-h-screen">
        <Carousel className="mb-10" />
        
        <h1 className="text-3xl text-black text-center mt-10 mb-6 font-press-start">
          Cartas Pokémon
        </h1>

        <PokemonList />
      </main>
    </>
  );
}