import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { CONCEPT_BOARDS } from '../data/portfolioData';

export default function AtmosphereLab() {
  const [board, setBoard] = useState(CONCEPT_BOARDS[0]);

  return (
    <div className="rounded-3xl border border-architectural bg-white p-4 shadow-sm sm:p-8">
      <h3 className="text-2xl font-light tracking-tight text-charcoal sm:text-3xl">
        Pick a style you like for your home
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#66615A]">
        Compare concept boards for color palettes, materials, and lighting ideas.
      </p>

      <div role="group" aria-label="Interior styles" className="mt-5 flex flex-wrap gap-2 border-b border-architectural pb-5">
        {CONCEPT_BOARDS.map((concept) => (
          <button
            key={concept.id}
            type="button"
            onClick={() => setBoard(concept)}
            aria-pressed={board.id === concept.id}
            className="min-h-11 cursor-pointer rounded-full bg-ivory px-3.5 text-xs font-medium text-charcoal hover:bg-ivory-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-pressed:bg-charcoal aria-pressed:text-ivory sm:px-4 sm:text-sm"
          >
            {concept.title}
          </button>
        ))}
      </div>

      <div className="mt-5 grid items-center gap-6 sm:mt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <a
          href={board.image}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-3 rounded-2xl bg-ivory-dark p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:p-5"
        >
          <img
            src={board.image}
            alt={`${board.title} interior concept board`}
            width={board.width}
            height={board.height}
            loading="lazy"
            decoding="async"
            className="h-80 w-full object-contain sm:h-[27rem]"
          />
          <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal group-hover:underline">
            <Maximize2 className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            View full-size board<span className="sr-only"> (opens in a new tab)</span>
          </span>
        </a>

        <div>
          <h4 className="font-serif text-2xl text-charcoal sm:text-3xl" aria-live="polite">{board.title}</h4>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#66615A] sm:text-base">{board.description}</p>
          <ul aria-label="Board color palette" className="mt-5 grid max-w-md grid-cols-4 gap-2 sm:gap-3">
            {board.palette.map(([name, color]) => (
              <li key={name} className="text-center text-xs font-medium text-charcoal">
                <span
                  aria-hidden="true"
                  className="mb-1.5 block h-7 rounded-lg border border-architectural sm:h-10"
                  style={{ backgroundColor: color }}
                />
                {name}
              </li>
            ))}
          </ul>
          <Link
            to={`/contact?service=${encodeURIComponent(`Aesthetic: ${board.title}`)}`}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-charcoal px-5 text-sm font-medium text-ivory hover:bg-[#3B342B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Ask about this style <ArrowUpRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
