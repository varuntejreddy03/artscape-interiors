import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../src/data/galleryData.js';
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
  };
  for (const [id, project] of Object.entries(expected)) {
    const item = GALLERY_ITEMS.find((item) => item.id === id);
    assert.equal(item.project, project);
    assert.ok(item.title.startsWith(`${project} · `), id);
  }
  assert.ok(GALLERY_ITEMS.filter((item) => item.category === 'exterior').every((item) => item.project === 'Proddutur'));
  assert.equal(GALLERY_ITEMS.find((item) => item.id === 'sage-compact-kitchen').category, 'commercial');
  assert.equal(new Set(GALLERY_ITEMS.slice(0, 6).map((item) => item.project)).size, 5);
});
