import { GALLERY_ITEMS } from './galleryData.js';

export const PROJECT_COLLECTIONS = [
  ['indis-viva-city', 'Indis Viva City', 'A complete home design with a living room, bedrooms, kitchen, foyer and utility.'],
  ['chanda-nagar', 'Chanda Nagar', 'A home interior with coordinated bedrooms, kitchen and bespoke living and dining joinery.'],
  ['kadapa', 'Kadapa', 'A living area with an arched timber partition and a custom illuminated TV wall.'],
  ['dental-clinic', 'Dental Clinic', 'Commercial interiors with fitted storage for the treatment room and pantry.'],
  ['proddutur', 'Proddutur', 'Residential elevations with deep balconies, timber-look screening and warm lighting.'],
  ['siddavatam', 'Siddavatam', 'Residential elevations in charcoal, stone and timber with screened entrances.'],
].map(([id, title, description]) => ({
  id,
  title,
  description,
  items: GALLERY_ITEMS.filter((item) => item.project === title),
}));

function portfolioImage([id, title, description, width, height]) {
  return {
    id,
    title,
    description,
    width,
    height,
    image: `/images/portfolio/${id}.jpg`,
    thumbnail: `/images/portfolio/${id}-preview.webp`,
  };
}

export const CONCEPT_BOARDS = [
  [
    ["natural-neutrals", "Natural Neutrals", "Travertine, natural oak, woven fabrics and greenery in a soft palette of sand, taupe and olive.", 736, 1104],
    [['Ivory', '#D8C8B8'], ['Sand', '#C8B49B'], ['Taupe', '#AB9178'], ['Olive', '#7D7551']],
  ],
  [
    ["warm-modern", "Warm Modern", "Light wood, walnut, linen and cane tie together the living, dining, kitchen and study spaces.", 736, 1040],
    [['Linen', '#CBBFB3'], ['Taupe', '#B2A18F'], ['Walnut', '#755236'], ['Olive', '#645F39']],
  ],
  [
    ["scandinavian-soul", "Scandinavian Soul", "Linen and travertine set off blush, bordeaux and olive accents. A floor plan shows how the spaces connect.", 736, 1104],
    [['Linen', '#C9BAA6'], ['Blush', '#AE827A'], ['Bordeaux', '#663632'], ['Olive', '#6F6A4C']],
  ],
  [
    ["contemporary-warm", "Contemporary Warmth", "Layered wood tones, textured upholstery and soft lighting bring warmth to clean-lined interiors.", 735, 1041],
    [['Warm white', '#D4CCC1'], ['Oak', '#AA845F'], ['Terracotta', '#A15E33'], ['Olive', '#4D4B36']],
  ],
  [
    ["modern-apartment", "Modern Apartment", "Warm beige, terracotta and olive carry through the fitted storage, soft seating and lighting scheme.", 736, 809],
    [['Sand', '#DACABA'], ['Beige', '#C7AA8C'], ['Olive', '#555636'], ['Terracotta', '#CB612D']],
  ],
  [
    ["south-indian", "South Indian", "Teak, cane, lime plaster and patterned Athangudi tiles balance traditional craft with modern layouts.", 736, 1104],
    [['Sand beige', '#C6AF90'], ['Terracotta', '#883F12'], ['Teak brown', '#492809'], ['Moss green', '#363717']],
  ],
  [
    ["mid-century", "Layered Mid-Century", "Earthy greens, rust upholstery and warm woods sit alongside globe lighting and rich textures.", 736, 829],
    [['Olive', '#46492C'], ['Rust', '#8F4A28'], ['Mustard', '#A67F3E'], ['Walnut', '#402F1D']],
  ],
].map(([image, palette]) => ({ ...portfolioImage(image), palette }));

const previousStudies = GALLERY_ITEMS.filter((item) => item.project === 'Selected design studies');

export const DESIGN_COLLECTIONS = [
  {
    id: "kitchen-designs",
    title: "Kitchen Designs",
    description: "Cabinet finishes, worktop layouts and display storage.",
    items: [
      ["sage-and-brass-kitchen", "Sage & Brass Kitchen", "Sage cabinets frame illuminated glass storage and a light worktop.", 735, 725],
      ["two-tone-corner-kitchen", "Two-Tone Corner Kitchen", "A cool neutral palette with concealed lighting beneath the base and wall cabinets.", 736, 736],
      ["kitchen-with-breakfast-counter", "Kitchen with Breakfast Counter", "A timber peninsula, lit display cabinets and patterned backsplash define the kitchen.", 720, 1006],
      ["patterned-tile-kitchen", "Patterned-Tile Kitchen", "Decorative cabinetry, timber shelving and a patterned backsplash give this kitchen its character.", 736, 1104],
      ["window-side-kitchen", "Window-Side Kitchen", "A window seat and open shelving bring daylight into a timber and olive kitchen.", 735, 919],
    ].map(portfolioImage),
  },
  {
    id: "bedroom-designs",
    title: "Bedroom Designs",
    description: "Headboards, wardrobes, window seating and children’s rooms.",
    items: [
      ["blue-grey-bedroom", "Blue-Grey Bedroom", "A blue-grey upholstered bed pairs with a curved dressing mirror and built-in storage.", 736, 552],
      ["arched-headboard-bedroom", "Arched Headboard Bedroom", "A botanical headboard recess and timber wardrobes frame a light-filled bedroom.", 736, 589],
      ["green-window-seat-bedroom", "Green Window Seat Bedroom", "Olive wall panels and a window bench bring color and usable seating into the bedroom.", 736, 1104],
      ["botanical-wardrobe", "Botanical Wardrobe", "Botanical panels soften a dark timber wardrobe and a matching dressing area.", 735, 518],
      ["timber-window-bench", "Timber Window Bench", "A low timber bench runs beneath the window beside the bed.", 736, 981],
      ["shared-childrens-bedroom", "Shared Children’s Bedroom", "Twin beds flank a central shelf with playful arched headboards in sage and blush.", 735, 1105],
      ["ivory-bedroom-study", "Ivory Bedroom Study", "Several views show how ivory wall panels, soft lighting and fitted joinery work together.", 735, 919],
      ["sage-bedroom-study", "Sage Bedroom Study", "A coordinated set of views pairs sage upholstery with floral panels and a dressing area.", 735, 919],
      ["blush-childrens-bedroom", "Blush Children’s Bedroom", "Rounded wardrobe doors and open shelving pick up the room’s blush palette.", 736, 736],
      ["bedroom-with-study-desk", "Bedroom with Study Desk", "A soft blue headboard and coordinated study desk bring work and rest into the same room.", 736, 882],
    ].map(portfolioImage),
  },
  {
    id: "tv-units",
    title: "TV Units",
    description: "Media walls, concealed lighting and integrated shelving.",
    items: [
      ["curved-backlit-tv-unit", "Curved Backlit TV Unit", "A curved recess combines concealed lighting and shelves beside the screen.", 735, 672],
      ["framed-media-wall", "Framed Media Wall", "Layered wall panels and illuminated niches frame a recessed TV.", 736, 589],
      ["timber-and-stone-tv-unit", "Timber & Stone TV Unit", "Timber accents and open display ledges soften a stone-look wall.", 736, 669],
      ["scalloped-tv-panel", "Scalloped TV Panel", "A scalloped decorative panel is paired with plants and an open console.", 736, 1123],
      ["backlit-timber-tv-unit", "Backlit Timber TV Unit", "A timber storage bench and lit display shelf frame a warm media wall.", 735, 806],
      ["green-media-wall", "Green Media Wall", "Olive paneling meets a timber display column and floating media console.", 736, 1104],
    ].map(portfolioImage).concat(previousStudies.filter((item) => item.category === 'living')),
  },
  {
    id: "crockery-and-partitions",
    title: "Crockery Units & Partitions",
    description: "Display cabinets, serving consoles and screens that define adjoining spaces.",
    items: [
      ["round-mirror-crockery-unit", "Round Mirror Crockery Unit", "Glazed display storage sits beside a serving console and round mirror.", 736, 552],
      ["curved-timber-partition", "Curved Timber Partition", "Timber slats sweep into a lit shelving unit and low planter.", 736, 736],
      ["botanical-panel-partition", "Botanical Panel Partition", "A botanical inset and open display shelves divide adjoining rooms.", 736, 736],
      ["brass-screen-partition", "Brass Screen Partition", "A decorative brass screen preserves sightlines between adjoining spaces.", 736, 925],
      ["sage-dining-and-display", "Sage Dining & Display", "Sage seating, a mirror and fitted storage define a sunlit dining area.", 735, 919],
      ["dining-wall-with-display", "Dining Wall with Display", "An organic mirror sits between recessed shelves and a serving console.", 735, 588],
      ["arched-glass-partition", "Arched Glass Partition", "An arched glazed screen and lit shelves mark the entrance to a dining space.", 669, 1200],
    ].map(portfolioImage).concat(previousStudies.filter((item) => item.category === 'dining')),
  },
  {
    id: "foyers-and-wall-claddings",
    title: "Foyers & Wall Claddings",
    description: "Entry seating, decorative panels and illuminated wall details.",
    items: [
      ["illuminated-foyer-wall", "Illuminated Foyer Wall", "A seating nook is framed by repeated lit motifs in a tall feature wall.", 736, 1308],
      ["botanical-entry-panels", "Botanical Entry Panels", "Framed botanical panels create a focal point behind a timber bench.", 736, 1308],
      ["staircase-feature-wall", "Staircase Feature Wall", "Rounded display niches and contrasting panels draw attention to the stair landing.", 735, 1093],
      ["fluted-wall-cladding", "Fluted Wall Cladding", "Fluted cladding is paired with a decorative band and curved lighting detail.", 735, 919],
    ].map(portfolioImage),
  },
  {
    id: "vanity-areas",
    title: "Vanity Areas",
    description: "Compact wash areas, floating cabinetry and mirror lighting.",
    items: [
      ["floating-green-vanity", "Floating Green Vanity", "A curved green vanity is paired with an organic mirror and pendant lighting.", 736, 1104],
      ["oak-bathroom-vanity", "Oak Bathroom Vanity", "A natural timber vanity and arched mirror sit against pale stone-look walls.", 736, 1318],
      ["backlit-vanity-niche", "Backlit Vanity Niche", "An illuminated arched mirror and display shelves frame a warm vanity niche.", 736, 1104],
      ["compact-bathroom-vanity", "Compact Bathroom Vanity", "A floating basin and lit niches keep the layout compact.", 736, 981],
    ].map(portfolioImage),
  },
  {
    id: "pooja-mandirs",
    title: "Pooja Mandirs",
    description: "Devotional niches, carved screens and layered lighting.",
    items: [
      ["floral-pooja-niche", "Floral Pooja Niche", "A timber-framed opening encloses a devotional niche with a patterned backdrop.", 736, 927],
      ["white-arched-mandir", "White Arched Mandir", "A soft white arch frames a small devotional platform and lower cabinet.", 736, 1370],
      ["timber-and-gold-mandir", "Timber & Gold Mandir", "A gold ornamental frame and brass lamps stand within a warmly lit timber niche.", 395, 592],
      ["backlit-pooja-mandir", "Backlit Pooja Mandir", "A concealed light outlines the devotional platform while shelves flank the shrine.", 736, 1308],
      ["carved-timber-mandir", "Carved Timber Mandir", "Decorative timber doors are paired with curved illuminated display niches.", 736, 1226],
    ].map(portfolioImage),
  },
];
