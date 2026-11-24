import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../src/data/galleryData.js';
import { CONCEPT_BOARDS, DESIGN_COLLECTIONS, PROJECT_COLLECTIONS } from '../src/data/portfolioData.js';
import { SERVICES } from '../src/data/servicesData.js';

test('project filters have unique, complete entries and real local images', () => {
  const categories = new Set(GALLERY_CATEGORIES.map(({ id }) => id));
  assert.equal(new Set(GALLERY_ITEMS.map(({ id }) => id)).size, GALLERY_ITEMS.length);
  assert.equal(new Set(GALLERY_ITEMS.map(({ image }) => image)).size, GALLERY_ITEMS.length);
  for (const item of GALLERY_ITEMS) {
    assert.ok(categories.has(item.category), item.id);
    assert.ok(item.width > 0 && item.height > 0, item.id);
    assert.ok(item.title && item.description && item.project, item.id);
    for (const image of [item.image, item.thumbnail]) {
      assert.ok(existsSync(new URL(`../public${image}`, import.meta.url)), image);
    }
  }
  for (const { id } of GALLERY_CATEGORIES.filter(({ id }) => id !== 'all')) {
    assert.ok(GALLERY_ITEMS.some(({ category }) => category === id), id);
  }
  for (const { image } of SERVICES) {
    assert.ok(existsSync(new URL(`../public${image}`, import.meta.url)), image);
  }
});

test('reference-matched images retain the studio project names', () => {
  const expected = {
    'grey-bedroom-suite': 'Chanda Nagar',
    'floral-panel-bedroom': 'Chanda Nagar',
    'dining-display-counter': 'Chanda Nagar',
    'geometric-entry-partition': 'Chanda Nagar',
    'backlit-ivory-tv-wall': 'Kadapa',
    'arched-living-partition': 'Kadapa',
    'sage-compact-kitchen': 'Dental Clinic',
    'stairside-marble-media-wall': 'Chanda Nagar',
    'chanda-nagar-modular-kitchen': 'Chanda Nagar',
    'dental-clinic-treatment-room': 'Dental Clinic',
    'dental-clinic-treatment-storage': 'Dental Clinic',
    'dental-clinic-pantry-side': 'Dental Clinic',
    'residence-charcoal-elevation': 'Siddavatam',
    'residence-stone-elevation': 'Siddavatam',
    'residence-courtyard-elevation': 'Siddavatam',
    'residence-evening-elevation': 'Proddutur',
    'residence-terracotta-elevation': 'Proddutur',
    'residence-sunset-elevation': 'Proddutur',
  };
  for (const [id, project] of Object.entries(expected)) {
    const item = GALLERY_ITEMS.find((item) => item.id === id);
    assert.equal(item.project, project);
    assert.ok(item.title.startsWith(`${project} · `), id);
  }
  assert.ok(GALLERY_ITEMS.filter((item) => item.category === 'exterior').every((item) => ['Proddutur', 'Siddavatam'].includes(item.project)));
  assert.equal(GALLERY_ITEMS.find((item) => item.id === 'sage-compact-kitchen').category, 'commercial');
  assert.equal(new Set(GALLERY_ITEMS.slice(0, 6).map((item) => item.project)).size, 6);
});

test('project images and the shared logo stay within their download budgets', () => {
  for (const { image, thumbnail } of GALLERY_ITEMS) {
    assert.ok(statSync(new URL(`../public${image}`, import.meta.url)).size < 450 * 1024, image);
    assert.ok(statSync(new URL(`../public${thumbnail}`, import.meta.url)).size < 64 * 1024, thumbnail);
  }
  assert.ok(statSync(new URL('../src/assets/logo.webp', import.meta.url)).size < 20 * 1024);
});

test('the supplied project folders are complete without duplicate images', () => {
  for (const [project, count] of [['Chanda Nagar', 6], ['Dental Clinic', 4], ['Kadapa', 2], ['Proddutur', 3], ['Siddavatam', 3]]) {
    assert.equal(GALLERY_ITEMS.filter((item) => item.project === project).length, count, project);
  }
  const hashes = GALLERY_ITEMS.map(({ image }) => createHash('sha256')
    .update(readFileSync(new URL(`../public${image}`, import.meta.url))).digest('hex'));
  assert.equal(new Set(hashes).size, GALLERY_ITEMS.length);
});

test('the portfolio groups each render and includes every November 24 design reference', () => {
  assert.equal(PROJECT_COLLECTIONS.length, 6);
  for (const { title, items } of PROJECT_COLLECTIONS) {
    assert.ok(items.length > 1, title);
    assert.ok(items.every((item) => item.project === title), title);
  }

  const newReferences = DESIGN_COLLECTIONS.map(({ items }) =>
    items.filter(({ image }) => image.startsWith('/images/portfolio/')).length);
  assert.deepEqual(newReferences, [5, 10, 6, 7, 4, 4, 5]);
  assert.equal(CONCEPT_BOARDS.length, 7);

  const portfolio = [...PROJECT_COLLECTIONS, ...DESIGN_COLLECTIONS].flatMap(({ items }) => items);
  assert.deepEqual(portfolio.filter((item) => item.project).map(({ id }) => id).sort(), GALLERY_ITEMS.map(({ id }) => id).sort());
  const allImages = [...portfolio, ...CONCEPT_BOARDS];
  assert.equal(new Set(allImages.map(({ id }) => id)).size, allImages.length);
  for (const { image, thumbnail, width, height } of allImages) {
    assert.ok(width > 0 && height > 0, image);
    assert.ok(statSync(new URL(`../public${image}`, import.meta.url)).size < 450 * 1024, image);
    assert.ok(statSync(new URL(`../public${thumbnail}`, import.meta.url)).size < 64 * 1024, thumbnail);
  }
  assert.ok(!GALLERY_ITEMS.some(({ id }) => id === 'indis-pooja-cabinet'));
  assert.ok(!existsSync(new URL('../public/images/projects/indis-pooja-cabinet.webp', import.meta.url)));
});
