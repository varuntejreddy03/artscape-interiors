import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { CONCEPT_BOARDS } from '../data/portfolioData';

export default function AtmosphereLab() {
  const [board, setBoard] = useState(CONCEPT_BOARDS[0]);

  return (
    <div className="grid gap-5 rounded-3xl border border-gold-subtle bg-ivory-light p-3 shadow-sm sm:gap-6 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-x-9 lg:p-8">
      <div className="lg:col-start-2 lg:row-start-1 lg:self-end">
        <h3 className="text-xl font-light tracking-tight text-charcoal sm:text-3xl">
          Pick a style you like for your home
        </h3>
        <div role="group" aria-label="Interior styles" className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-5 sm:grid-cols-4 sm:gap-2 lg:grid-cols-3">
          {CONCEPT_BOARDS.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => setBoard(concept)}
              aria-pressed={board.id === concept.id}
              className="flex min-h-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-architectural bg-ivory px-1 py-1.5 text-center text-xs font-medium leading-tight text-charcoal hover:border-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-pressed:border-gold-light aria-pressed:bg-charcoal aria-pressed:text-ivory sm:px-2"
            >
              <span aria-hidden="true" className="flex h-1.5 w-10 overflow-hidden rounded-full">
                {concept.palette.map(([name, color]) => (
                  <span key={name} className="flex-1" style={{ backgroundColor: color }} />
                ))}
              </span>
              {concept.title}
            </button>
          ))}
        </div>
      </div>

      <a
        href={board.image}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col items-center gap-3 rounded-2xl bg-ivory-dark p-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:p-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-start"
      >
        <img
          src={board.image}
          alt={`${board.title} interior concept board`}
          width={board.width}
          height={board.height}
          loading="lazy"
          decoding="async"
          className="h-[clamp(18rem,100vw,26rem)] w-full object-contain sm:h-[30rem] lg:h-[34rem]"
        />
        <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal group-hover:underline">
          <Maximize2 className="h-4 w-4 text-gold-dark" aria-hidden="true" />
          View full-size board<span className="sr-only"> (opens in a new tab)</span>
        </span>
      </a>

      <div className="border-t border-architectural pt-4 lg:col-start-2 lg:row-start-2">
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
  );
}
