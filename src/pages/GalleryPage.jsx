import React, { useState } from 'react';
import { ArrowDown, Maximize2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import GalleryCollectionCard from '../components/GalleryCollectionCard';
import GalleryLightbox from '../components/GalleryLightbox';
import { CONCEPT_BOARDS, DESIGN_COLLECTIONS, PROJECT_COLLECTIONS } from '../data/portfolioData';

const PORTFOLIO_SECTIONS = [
  ['projects', 'Projects'],
  ['design-portfolio', 'Design Portfolio'],
  ['interior-concept-boards', 'Concept Boards'],
];

const sectionScrollMargin = 'scroll-mt-[calc(var(--portfolio-scroll-offset)+0.625rem)] md:scroll-mt-(--portfolio-scroll-offset)';

export default function GalleryPage() {
  const [activeCollection, setActiveCollection] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  function openCollection(collection, index = 0) {
    setImageIndex(index);
    setActiveCollection(collection);
  }

  return (
    <div className="bg-ivory [--portfolio-jump-height:calc(3.5rem+1px)] [--portfolio-scroll-offset:calc(var(--site-header-height)+var(--portfolio-jump-height))] md:[--portfolio-scroll-offset:calc(var(--site-header-height)+1rem)]">
      <PageHeader
        title={<>Our <span className="font-serif italic text-gold">portfolio</span></>}
        subtitle="Explore residential and commercial projects, design references by space, and interior concept boards."
        breadcrumb="Portfolio"
        bgImage="/images/projects/indis-entrance-foyer-preview.webp"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Portfolio sections"
          className="sticky top-(--site-header-height) z-30 -mx-4 grid h-(--portfolio-jump-height) grid-cols-3 gap-1 border-b border-architectural bg-ivory px-3 py-1.5 sm:-mx-6 sm:px-6 md:static md:mx-0 md:flex md:h-auto md:gap-2 md:bg-transparent md:px-0 md:py-5"
        >
          {PORTFOLIO_SECTIONS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-architectural bg-ivory-light px-1 text-center text-xs font-medium hover:border-gold focus-visible:outline-2 focus-visible:outline-gold sm:px-4 sm:text-sm"
            >
              {label}
              <ArrowDown className="hidden h-3.5 w-3.5 text-gold-dark md:block" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <section id="projects" className="scroll-mt-(--portfolio-scroll-offset) pb-12 pt-7 sm:pb-20 sm:pt-10">
          <SectionHeading
            title="Projects"
            subtitle="Open a project to see its rooms, custom details and elevations together."
            align="split"
            className="mb-6 md:mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_COLLECTIONS.map((collection) => (
              <GalleryCollectionCard key={collection.id} collection={collection} onOpen={openCollection} />
            ))}
          </div>
        </section>

        <section id="design-portfolio" className={`${sectionScrollMargin} border-t border-architectural py-12 sm:py-20`}>
          <SectionHeading
            title="Design Portfolio"
            subtitle="Browse render references for individual spaces and details, from kitchen layouts to pooja mandirs."
            align="split"
            className="mb-6 md:mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESIGN_COLLECTIONS.map((collection) => (
              <GalleryCollectionCard key={collection.id} collection={collection} onOpen={openCollection} />
            ))}
          </div>
        </section>

        <section id="interior-concept-boards" className={`${sectionScrollMargin} border-t border-architectural py-12 sm:py-20`}>
          <SectionHeading
            title="Interior Concept Boards"
            subtitle="Explore interior themes and see how color palettes, materials, furniture and lighting come together."
            align="split"
            className="mb-6 md:mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONCEPT_BOARDS.map((board, index) => (
              <article key={board.id} className="group relative overflow-hidden rounded-2xl border border-architectural bg-ivory-light focus-within:ring-2 focus-within:ring-gold">
                <div className="flex h-80 items-center justify-center bg-ivory-dark p-4 sm:h-96">
                  <img
                    src={board.thumbnail}
                    width={board.width}
                    height={board.height}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-medium tracking-tight">
                      <button
                        type="button"
                        aria-label={`View ${board.title} concept board`}
                        aria-haspopup="dialog"
                        onClick={() => openCollection({ title: 'Interior Concept Boards', items: CONCEPT_BOARDS, showOriginal: true }, index)}
                        className="cursor-pointer text-left outline-none after:absolute after:inset-0 group-hover:text-gold-dark"
                      >
                        {board.title}
                      </button>
                    </h3>
                    <Maximize2 aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-dark" />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#66615A]">{board.description}</p>
                  <div
                    role="img"
                    aria-label={`Palette with ${board.palette.map(([name]) => name).join(', ')}`}
                    className="mt-4 grid grid-cols-4 gap-1.5"
                  >
                    {board.palette.map(([name, color]) => (
                      <span
                        key={name}
                        aria-hidden="true"
                        style={{ backgroundColor: color }}
                        className="h-3 rounded-full border border-architectural"
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {activeCollection && (
        <GalleryLightbox
          isOpen
          title={activeCollection.title}
          currentIndex={imageIndex}
          items={activeCollection.items}
          showOriginal={activeCollection.showOriginal}
          onClose={() => setActiveCollection(null)}
          onNext={() => setImageIndex((index) => (index + 1) % activeCollection.items.length)}
          onPrev={() => setImageIndex((index) => (index - 1 + activeCollection.items.length) % activeCollection.items.length)}
          onSelect={setImageIndex}
        />
      )}
    </div>
  );
}
