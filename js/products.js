/* Demo product catalogue  -  Urban Nuts preview */
window.URBAN_NUTS = window.URBAN_NUTS || {};

window.URBAN_NUTS.categories = [
  { id: "nuts", name: "Nuts", image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/ALMONDS-copy-600x600.jpg", blurb: "Premium roasted & raw" },
  { id: "dried-fruit", name: "Dried Fruit", image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/2319012A-AFBC-4157-BE91-AF90E104FC67-300x300.jpeg", blurb: "Sun-kissed & juicy" },
  { id: "coated", name: "Coated", image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/PEANUTS-copy-600x600.jpg", blurb: "Chocolate & yoghurt" },
  { id: "seeds", name: "Seeds & Grains", image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/SEEDS-CATEGORY-copy-e1648126041145-300x300.jpg", blurb: "Wholesome staples" },
  { id: "mixes", name: "Mixes", image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/BCA269C3-B817-4505-99BE-FCAC3D616820-scaled-e1648117621340-600x602.jpeg", blurb: "Ready-to-snack blends" }
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/PEANUTS-copy-600x600.jpg",
    badge: "Popular",
    description: "Crisp peanuts with a bold wasabi kick  -  a Cape Town favourite for spice lovers.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/BCA269C3-B817-4505-99BE-FCAC3D616820-scaled-e1648117621340-600x602.jpeg",
    badge: "Best seller",
    description: "A carefully balanced blend of cashews, almonds, Brazil nuts and more  -  premium, never oily.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/PECANS-600x600.jpg",
    description: "Delicate, buttery pine nuts  -  ideal for pesto, salads and gourmet cooking.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/CASHEWS-600x600.jpg",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/ALMONDS-copy-600x600.jpg",
    description: "Crunchy California-style almonds  -  a pantry essential for snacking and baking.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/ROASTED-PEANUTS-IN-SHELL-copy.jpg",
    description: "Traditional South African apricot confection  -  soft, tangy and irresistibly moreish.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/BLACK-BEANS-copy-600x600.jpg",
    description: "Plump golden sultanas with natural sweetness  -  baking, trail mixes and breakfast bowls.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/CHICKPEAS-1-600x600.jpg",
    description: "Extra-large juicy raisins  -  a classic lunchbox and baking staple.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/COUS-COUS-copy-600x600.jpg",
    description: "Colourful dried fruit shapes  -  fun for kids and beautiful on dessert boards.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/02/SEEDS-CATEGORY-copy-e1648126041145-300x300.jpg",
    description: "Smooth yoghurt coating over crunchy peanuts  -  sweet, creamy and crowd-pleasing.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/2319012A-AFBC-4157-BE91-AF90E104FC67-300x300.jpeg",
    badge: "Rated 5★",
    description: "Indulgent coated snacks without the sugar  -  crafted for mindful snacking.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/28352426-0FCA-4799-ADAE-86C157214255-300x300.jpeg",
    description: "Light popcorn finished with a rich chocolate drizzle  -  movie-night perfection.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/5CC065FB-EEB2-47B7-8674-87C592282653-scaled-e1648110929177-300x300.jpeg",
    description: "Tiny powerhouses of omega-3 and fibre  -  puddings, smoothies and overnight oats.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/8C42ECDB-892B-4F70-B4E5-E09C87E54A76-300x300.jpeg",
    description: "Crunchy pepitas packed with minerals  -  toast them or sprinkle over salads.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/55700E3D-CF5C-45D5-98BE-53609D1A48FA-300x300.jpeg",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/A27E0C13-3AC4-473F-8938-AFE6C94F08AF-300x300.jpeg",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/9BA2E58A-61B3-4357-B327-4D6774388FA6-300x300.jpeg",
    badge: "New",
    description: "Nuts, seeds and dried fruit in one go-anywhere mix  -  fuel for Cape Town adventures.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/77B6C559-0429-4AFD-85FA-DAA77E0163F4-scaled-e1648121617873-300x300.jpeg",
    description: "An energetic blend of nuts, raisins and coated bites  -  study-session approved.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/7592FE2E-B858-446E-984A-17AAE40FBB77-scaled-e1648124911531-300x300.jpeg",
    description: "Macadamias, pistachios, cashews and almonds  -  our most indulgent house blend.",
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
    image: "https://urban-nuts.co.za/wp-content/uploads/2022/03/07FC5B73-6F25-4CDD-83BF-1FD2A000A02C-scaled-e1648120425438-300x300.jpeg",
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
