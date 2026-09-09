/* Demo product catalogue — Urban Nuts preview */
window.URBAN_NUTS = window.URBAN_NUTS || {};

window.URBAN_NUTS.categories = [
  { id: "nuts", name: "Nuts", icon: "🥜", blurb: "Premium roasted & raw" },
  { id: "dried-fruit", name: "Dried Fruit", icon: "🍇", blurb: "Sun-kissed & juicy" },
  { id: "coated", name: "Coated", icon: "🍫", blurb: "Chocolate & yoghurt" },
  { id: "seeds", name: "Seeds & Grains", icon: "🌾", blurb: "Wholesome staples" },
  { id: "mixes", name: "Mixes", icon: "✨", blurb: "Ready-to-snack blends" }
];

window.URBAN_NUTS.stores = [
  { name: "Access Park, Kenilworth", address: "Unit D8, Access Park, Kenilworth, Cape Town", phone: "060 830 4454" },
  { name: "Edgemead Village", address: "Shop 33, Edgemead Village Centre, Edgemead", phone: "079 162 1258" },
  { name: "N1 City, Goodwood", address: "N1 City Shopping Centre, Goodwood, Cape Town", phone: "063 648 9578" },
  { name: "Boulevard Square, Brackenfell", address: "Boulevard Square, Brackenfell, Cape Town", phone: "083 627 7992" },
  { name: "Haasendal Gables", address: "Haasendal Gables Shopping Centre, Kuilsriver", phone: "066 417 3716" },
  { name: "Eikestad Mall, Stellenbosch", address: "Eikestad Mall, 43 Andringa St, Stellenbosch", phone: "083 627 7992" }
];

window.URBAN_NUTS.products = [
  {
    id: "wasabi-peanuts",
    name: "Wasabi Coated Peanuts",
    category: "coated",
    emoji: "🌶️",
    badge: "Popular",
    description: "Crisp peanuts with a bold wasabi kick — a Cape Town favourite for spice lovers.",
    variants: [
      { id: "100g", label: "100g", price: 28 },
      { id: "250g", label: "250g", price: 62 },
      { id: "500g", label: "500g", price: 118 },
      { id: "1kg", label: "1kg", price: 222 }
    ]
  },
  {
    id: "mixed-nuts",
    name: "Mixed Nuts",
    category: "nuts",
    emoji: "🥜",
    badge: "Best seller",
    description: "A carefully balanced blend of cashews, almonds, Brazil nuts and more — premium, never oily.",
    variants: [
      { id: "100g", label: "100g", price: 29 },
      { id: "250g", label: "250g", price: 68 },
      { id: "500g", label: "500g", price: 128 },
      { id: "1kg", label: "1kg", price: 242 }
    ]
  },
  {
    id: "pine-kernels",
    name: "Pine Kernels",
    category: "nuts",
    emoji: "🌲",
    description: "Delicate, buttery pine nuts — ideal for pesto, salads and gourmet cooking.",
    variants: [
      { id: "100g", label: "100g", price: 176 },
      { id: "250g", label: "250g", price: 398 },
      { id: "500g", label: "500g", price: 742 },
      { id: "1kg", label: "1kg", price: 1384 }
    ]
  },
  {
    id: "cashews-raw",
    name: "Raw Cashews",
    category: "nuts",
    emoji: "🤍",
    badge: "Premium",
    description: "Creamy whole cashews, carefully selected for freshness and size.",
    variants: [
      { id: "100g", label: "100g", price: 42 },
      { id: "250g", label: "250g", price: 95 },
      { id: "500g", label: "500g", price: 178 },
      { id: "1kg", label: "1kg", price: 338 }
    ]
  },
  {
    id: "almonds",
    name: "Raw Almonds",
    category: "nuts",
    emoji: "🌰",
    description: "Crunchy California-style almonds — a pantry essential for snacking and baking.",
    variants: [
      { id: "100g", label: "100g", price: 38 },
      { id: "250g", label: "250g", price: 86 },
      { id: "500g", label: "500g", price: 162 },
      { id: "1kg", label: "1kg", price: 298 }
    ]
  },
  {
    id: "mebos",
    name: "Mebos",
    category: "dried-fruit",
    emoji: "🍑",
    description: "Traditional South African apricot confection — soft, tangy and irresistibly moreish.",
    variants: [
      { id: "100g", label: "100g", price: 20 },
      { id: "250g", label: "250g", price: 48 },
      { id: "500g", label: "500g", price: 92 },
      { id: "1kg", label: "1kg", price: 178 }
    ]
  },
  {
    id: "golden-sultanas",
    name: "Raisins (Golden Sultanas)",
    category: "dried-fruit",
    emoji: "☀️",
    description: "Plump golden sultanas with natural sweetness — baking, trail mixes and breakfast bowls.",
    variants: [
      { id: "100g", label: "100g", price: 9 },
      { id: "250g", label: "250g", price: 20 },
      { id: "500g", label: "500g", price: 38 },
      { id: "1kg", label: "1kg", price: 72 }
    ]
  },
  {
    id: "jumbo-raisins",
    name: "Raisins (Jumbo)",
    category: "dried-fruit",
    emoji: "🍇",
    description: "Extra-large juicy raisins — a classic lunchbox and baking staple.",
    variants: [
      { id: "100g", label: "100g", price: 9 },
      { id: "250g", label: "250g", price: 20 },
      { id: "500g", label: "500g", price: 38 },
      { id: "1kg", label: "1kg", price: 72 }
    ]
  },
  {
    id: "fruit-lollies",
    name: "Fruit Lollies, Flakes & Cubes",
    category: "dried-fruit",
    emoji: "🍭",
    description: "Colourful dried fruit shapes — fun for kids and beautiful on dessert boards.",
    variants: [
      { id: "100g", label: "100g", price: 17 },
      { id: "250g", label: "250g", price: 40 },
      { id: "500g", label: "500g", price: 78 },
      { id: "1kg", label: "1kg", price: 148 }
    ]
  },
  {
    id: "yoghurt-peanuts",
    name: "Yoghurt Coated Peanuts",
    category: "coated",
    emoji: "🥛",
    description: "Smooth yoghurt coating over crunchy peanuts — sweet, creamy and crowd-pleasing.",
    variants: [
      { id: "100g", label: "100g", price: 21 },
      { id: "250g", label: "250g", price: 48 },
      { id: "500g", label: "500g", price: 88 },
      { id: "1kg", label: "1kg", price: 155 }
    ]
  },
  {
    id: "sugar-free-coated",
    name: "Sugar-Free Coated Products",
    category: "coated",
    emoji: "💚",
    badge: "Rated 5★",
    description: "Indulgent coated snacks without the sugar — crafted for mindful snacking.",
    variants: [
      { id: "100g", label: "100g", price: 24 },
      { id: "250g", label: "250g", price: 58 },
      { id: "500g", label: "500g", price: 112 },
      { id: "1kg", label: "1kg", price: 208 }
    ]
  },
  {
    id: "choc-popcorn",
    name: "Chocolate Drizzle Popcorn",
    category: "coated",
    emoji: "🍿",
    description: "Light popcorn finished with a rich chocolate drizzle — movie-night perfection.",
    variants: [
      { id: "100g", label: "100g", price: 22 },
      { id: "250g", label: "250g", price: 52 },
      { id: "500g", label: "500g", price: 98 },
      { id: "1kg", label: "1kg", price: 182 }
    ]
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    category: "seeds",
    emoji: "🖤",
    description: "Tiny powerhouses of omega-3 and fibre — puddings, smoothies and overnight oats.",
    variants: [
      { id: "100g", label: "100g", price: 29 },
      { id: "250g", label: "250g", price: 62 },
      { id: "500g", label: "500g", price: 112 },
      { id: "1kg", label: "1kg", price: 207 }
    ]
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "seeds",
    emoji: "🎃",
    description: "Crunchy pepitas packed with minerals — toast them or sprinkle over salads.",
    variants: [
      { id: "100g", label: "100g", price: 31 },
      { id: "250g", label: "250g", price: 68 },
      { id: "500g", label: "500g", price: 128 },
      { id: "1kg", label: "1kg", price: 245 }
    ]
  },
  {
    id: "linseed",
    name: "Linseed",
    category: "seeds",
    emoji: "🟤",
    description: "Nutty flax seeds for baking, cereals and wholesome everyday nutrition.",
    variants: [
      { id: "100g", label: "100g", price: 11 },
      { id: "250g", label: "250g", price: 24 },
      { id: "500g", label: "500g", price: 42 },
      { id: "1kg", label: "1kg", price: 79 }
    ]
  },
  {
    id: "bulgar-wheat",
    name: "Bulgar Wheat",
    category: "seeds",
    emoji: "🌾",
    description: "Quick-cooking bulgar for tabbouleh, grain bowls and hearty sides.",
    variants: [
      { id: "500g", label: "500g", price: 49 },
      { id: "1kg", label: "1kg", price: 85 }
    ]
  },
  {
    id: "trail-mix",
    name: "Classic Trail Mix",
    category: "mixes",
    emoji: "🥾",
    badge: "New",
    description: "Nuts, seeds and dried fruit in one go-anywhere mix — fuel for Cape Town adventures.",
    variants: [
      { id: "100g", label: "100g", price: 32 },
      { id: "250g", label: "250g", price: 72 },
      { id: "500g", label: "500g", price: 135 },
      { id: "1kg", label: "1kg", price: 255 }
    ]
  },
  {
    id: "student-mix",
    name: "Student Mix",
    category: "mixes",
    emoji: "📚",
    description: "An energetic blend of nuts, raisins and coated bites — study-session approved.",
    variants: [
      { id: "100g", label: "100g", price: 26 },
      { id: "250g", label: "250g", price: 58 },
      { id: "500g", label: "500g", price: 108 },
      { id: "1kg", label: "1kg", price: 198 }
    ]
  },
  {
    id: "luxury-mix",
    name: "Luxury Nut Mix",
    category: "mixes",
    emoji: "💎",
    description: "Macadamias, pistachios, cashews and almonds — our most indulgent house blend.",
    variants: [
      { id: "100g", label: "100g", price: 58 },
      { id: "250g", label: "250g", price: 132 },
      { id: "500g", label: "500g", price: 248 },
      { id: "1kg", label: "1kg", price: 462 }
    ]
  },
  {
    id: "energy-mix",
    name: "Energy Boost Mix",
    category: "mixes",
    emoji: "⚡",
    description: "Seeds, cranberries and roasted nuts tuned for sustained energy on the go.",
    variants: [
      { id: "100g", label: "100g", price: 34 },
      { id: "250g", label: "250g", price: 78 },
      { id: "500g", label: "500g", price: 145 },
      { id: "1kg", label: "1kg", price: 268 }
    ]
  }
];

window.URBAN_NUTS.formatZAR = function (amount) {
  const n = Number(amount) || 0;
  return "R" + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

window.URBAN_NUTS.getProduct = function (id) {
  return window.URBAN_NUTS.products.find(function (p) { return p.id === id; });
};

window.URBAN_NUTS.priceRange = function (product) {
  const prices = product.variants.map(function (v) { return v.price; });
  const min = Math.min.apply(null, prices);
  const max = Math.max.apply(null, prices);
  if (min === max) return window.URBAN_NUTS.formatZAR(min);
  return window.URBAN_NUTS.formatZAR(min) + "–" + window.URBAN_NUTS.formatZAR(max);
};
