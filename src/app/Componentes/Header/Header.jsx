"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-yellow-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-center">

        {}
        <div className="mb-4">
          <Image
            src="/image/pokemon-logo.png"
            alt="Pokémon Logo"
            width={250}
            height={80}
            className="object-contain"
          />
        </div>

        {}
        <nav className="w-full flex justify-center mt-4">
          <ul className="flex gap-6 text-lg font-bold uppercase">
            <li>
              <Link href="/" className="hover:text-red-600">Início</Link>
            </li>
            <li>
              <Link href="/#cartas" className="hover:text-red-600">Cartas</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}