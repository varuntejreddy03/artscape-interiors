import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function GalleryCollectionCard({ collection, onOpen, previewItems = collection.items.slice(0, 3) }) {
  const { id, title, description, items } = collection;

  return (
    <article id={id} className="group relative scroll-mt-[calc(var(--portfolio-scroll-offset,var(--site-header-height))+0.625rem)] overflow-hidden rounded-2xl border border-architectural bg-ivory-light focus-within:ring-2 focus-within:ring-gold">
      <div className="grid aspect-[5/3] grid-cols-[2fr_1fr] grid-rows-2 gap-1 overflow-hidden bg-ivory-dark" aria-hidden="true">
        {previewItems.map((item, index) => (
          <img
            key={item.id}
            src={item.thumbnail}
            width={item.width}
            height={item.height}
            alt=""
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover ${index === 0 || previewItems.length === 2 ? 'row-span-2' : ''}`}
          />
        ))}
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
            <button
              type="button"
              onClick={() => onOpen(collection)}
              aria-label={`View ${title} gallery`}
              aria-haspopup="dialog"
              className="cursor-pointer text-left outline-none after:absolute after:inset-0 group-hover:text-gold-dark"
            >
              {title}
            </button>
          </h3>
          <Maximize2 aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-dark" />
        </div>
        <p className="mt-1 text-sm leading-relaxed text-[#66615A]">{description}</p>
        <p className="mt-3 text-xs font-medium text-gold-dark">{items.length} images</p>
      </div>
    </article>
  );
}
