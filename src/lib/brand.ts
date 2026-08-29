/**
 * Single source of truth for Bread Pakodawala site content.
 * Every fact here is taken from the official website (breadpakodawala.com).
 * Anything not published there is marked `placeholder: true` — never invent
 * prices, reviews, addresses, hours or franchise numbers.
 */

import imgBhajiya from "@/assets/food-bhajiya.jpg";
import imgVadapav from "@/assets/food-vadapav.jpg";
import imgMojito from "@/assets/food-mojito.jpg";
import imgSandwich from "@/assets/food-sandwich.jpg";
import imgFries from "@/assets/food-fries.jpg";
import imgIcetea from "@/assets/food-icetea.jpg";
import imgShake from "@/assets/food-shake.jpg";
import imgFrying from "@/assets/food-frying.jpg";
import logo from "@/assets/logo.png";
import promo from "@/assets/promo.png";
import badgeTasty from "@/assets/badge-tasty.png";
import badgeYummy from "@/assets/badge-yummy.png";
import badgeDelicious from "@/assets/badge-delicious.png";
import pakodaPlate from "@/assets/pakoda-plate.png";
import pakodaPieces from "@/assets/pakoda-pieces.png";
import chilli from "@/assets/chilli.png";
import skyline from "@/assets/skyline.png";
import mascot from "@/assets/mascot.png";
import breadmascot1 from "@/assets/breadmascot1.png";
import breadmascot2 from "@/assets/breadmascot2.png";
import breadmascot3 from "@/assets/breadmascot3.png";
import breadmascot4 from "@/assets/breadmascot4.png";
import franchisemascot from "@/assets/franchisemascot.png";
import itemCheeseBurst from "@/assets/item-cheese-burst.png";
import itemPaneerBhurji from "@/assets/item-paneer-bhurji.png";
import itemExoticVeggies from "@/assets/item-exotic-veggies.jpg";
import itemTandoori from "@/assets/item-tandoori.jpg";
import itemPeriPeri from "@/assets/item-peri-peri.jpg";
import itemButterGarlic from "@/assets/item-butter-garlic.jpg";
import itemMexicanGrill from "@/assets/item-mexican-grill.jpg";
import itemMethiGota from "@/assets/item-methi-gota.jpg";
import itemDalwada from "@/assets/item-dalwada.jpg";
import itemColdCoffee from "@/assets/item-cold-coffee.webp";
import itemStrawberry from "@/assets/item-strawberry.webp";
import itemFrenchVanilla from "@/assets/item-french-vanilla.webp";
import itemChocolateChips from "@/assets/item-chocolate-chips.webp";
import itemGuavaIceTea from "@/assets/item-guava-ice-tea.webp";
import itemPeachIceTea from "@/assets/item-peach-ice-tea.webp";
import itemLemonIceTea from "@/assets/item-lemon-ice-tea.webp";
import itemIceTea from "@/assets/item-ice-tea.webp";
import itemColdCocoa from "@/assets/item-cold-cocoa.webp";
import itemWatermelonMojito from "@/assets/item-watermelon-mojito.webp";
import itemClassicMojito from "@/assets/item-classic-mojito.webp";
import itemPeriPeriFries from "@/assets/item-peri-peri-fries.webp";
import itemFrenchFries from "@/assets/item-french-fries.webp";
import itemPaneerBhurjiGrill from "@/assets/item-paneer-bhurji-grill.webp";
import itemAlooCheeseGrill from "@/assets/item-aloo-cheese-grill.webp";
import itemVegSandwich from "@/assets/item-veg-sandwich.webp";
import itemCheeseVadapav from "@/assets/item-cheese-vadapav.jpg";
import itemMasalaVadapav from "@/assets/item-masala-vadapav.webp";
import itemButtermilk from "@/assets/BUTTERMILK.png";
import itemMumbaiVadapav from "@/assets/MUMBAI_VADAPAV.png";
import itemMirchiBhajiya from "@/assets/MIRCHI_BHAJIYA.png";
import itemBatakaBhajiya from "@/assets/BATAKA_BHAJIYA.png";
import itemPeriPeriPakoda from "@/assets/PERI_PERI_PAKODA.png";
import itemAlooPakoda from "@/assets/ALOO-BREAD_PAKODA.png";

export const itemPhotos = {
  buttermilk: itemButtermilk,
  mumbaiVadapav: itemMumbaiVadapav,
  mirchiBhajiya: itemMirchiBhajiya,
  batakaBhajiya: itemBatakaBhajiya,
  periPeriPakoda: itemPeriPeriPakoda,
  alooPakoda: itemAlooPakoda,
  coldCocoa: itemColdCocoa,

  watermelonMojito: itemWatermelonMojito,
  classicMojito: itemClassicMojito,
  periPeriFries: itemPeriPeriFries,
  frenchFries: itemFrenchFries,
  paneerBhurjiGrill: itemPaneerBhurjiGrill,
  alooCheeseGrill: itemAlooCheeseGrill,
  vegSandwich: itemVegSandwich,
  cheeseVadapav: itemCheeseVadapav,
  masalaVadapav: itemMasalaVadapav,
  methiGota: itemMethiGota,
  dalwada: itemDalwada,
  coldCoffee: itemColdCoffee,
  strawberry: itemStrawberry,
  frenchVanilla: itemFrenchVanilla,
  chocolateChips: itemChocolateChips,
  guavaIceTea: itemGuavaIceTea,
  peachIceTea: itemPeachIceTea,
  lemonIceTea: itemLemonIceTea,
  iceTea: itemIceTea,
  cheeseBurst: itemCheeseBurst,
  paneerBhurji: itemPaneerBhurji,
  exoticVeggies: itemExoticVeggies,
  tandoori: itemTandoori,
  periPeri: itemPeriPeri,
  butterGarlic: itemButterGarlic,
  mexicanGrill: itemMexicanGrill,
};

export const foodImages = {
  pakoda: pakodaPieces,
  bhajiya: imgBhajiya,
  vadapav: imgVadapav,
  mojito: imgMojito,
  sandwich: imgSandwich,
  fries: imgFries,
  icetea: imgIcetea,
  shake: imgShake,
  frying: imgFrying,
};

export const assets = {
  logo,
  promo,
  badgeTasty,
  badgeYummy,
  badgeDelicious,
  pakodaPlate,
  pakodaPieces,
  chilli,
  skyline,
  mascot,
  breadmascot1,
  breadmascot2,
  breadmascot3,
  breadmascot4,
  franchisemascot,
};

const whatsappNumber = "918128193143";

export function whatsappLink(
  message = "Hello Bread Pakodawala, I would like to know more about your menu.",
) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const brand = {
  name: "Bread Pakodawala",
  legalName: "Jay Jalaram Nasta House",
  since: "1987",
  city: "Vadodara",
  tagline: "Chokhandi ka famous bread pakodawala",
  phoneDisplay: "+91 81281 93143",
  phoneHref: "tel:+918128193143",
  whatsappHref: whatsappLink(),
  address: "Jalaram Nasta House, Chokhandi, Vadodara, Gujarat",
  hours: "Everyday: 8:00 am – 10:00 pm",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jalaram+Nasta+House%2C+Chokhandi%2C+Vadodara",
  socials: {
    facebook: "https://www.facebook.com/share/19SuTb6MKu/",
    instagram: "https://www.instagram.com/bread_pakodawala?igsi=bXF6cHIwZGhqYW91",
  },
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/our-story" },
  { label: "Locations", to: "/locations" },
  { label: "Franchise", to: "/franchise" },
  { label: "Contact", to: "/contact" },
] as const;

export const cravingWords = [
  "Hot",
  "Crispy",
  "Spicy",
  "Fresh",
  "Desi",
  "Iconic",
  "Vadodara",
  "Bread Pakoda",
];

export const cravingPoints = [
  {
    title: "Crispy",
    copy: "Golden, crunchy exterior — fried to order, never sitting around.",
  },
  {
    title: "Hot",
    copy: "Freshly prepared through the day, from 8 in the morning till 10 at night.",
  },
  {
    title: "Desi",
    copy: "Authentic Indian street-food taste, the way Chokhandi has always known it.",
  },
  {
    title: "Iconic",
    copy: `A Vadodara food legacy, serving happiness since ${brand.since}.`,
  },
];

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  priceLabel: string;
  priceOptions?: { label: string; price: string }[];
  image: string;
  featured?: boolean;
  available?: boolean;
  placeholder?: boolean;
};

export const menuCategories = [
  { id: "all", label: "All" },
  { id: "pakoda", label: "Pakoda" },
  { id: "bhajiya", label: "Bhajiya" },
  { id: "vadapav", label: "Vadapav" },
  { id: "mojito", label: "Mojito" },
  { id: "sandwich", label: "Sandwich" },
  { id: "fries", label: "French Fries" },
  { id: "beverages", label: "Beverages" },
  { id: "shakes", label: "Shakes" },
];

const p = (
  id: string,
  name: string,
  price: string,
  description: string,
  extra?: Partial<MenuItem>,
): MenuItem => ({
  id,
  name,
  category: "pakoda",
  description,
  priceLabel: price,
  image: foodImages.pakoda,
  available: true,
  ...extra,
});

/** Prices taken from the shop's printed menu board. */
export const menuItems: MenuItem[] = [
  p(
    "aloo-pakoda",
    "Aloo Pakoda",
    "₹30",
    "Classic potato slices in spiced gram-flour batter, fried to a deep golden crunch.",
    { image: itemPhotos.alooPakoda },
  ),
  p(
    "butter-garlic-pakoda",
    "Butter Garlic Pakoda",
    "₹40",
    "Buttery, garlicky and fragrant — a rich twist on the counter favourite.",
    { image: itemPhotos.butterGarlic },
  ),
  p(
    "peri-peri-paneer-pakoda",
    "Peri Peri Paneer Pakoda",
    "₹50",
    "Soft paneer with a fiery peri peri kick inside a crisp shell.",
    { image: itemPhotos.periPeriPakoda },
  ),

  p(
    "tandoori-pakoda",
    "Tandoori Pakoda",
    "₹50",
    "Smoky tandoori masala folded into our signature batter.",
    { image: itemPhotos.tandoori },
  ),
  p(
    "exotic-veggies-pakoda",
    "Exotic Veggies Pakoda",
    "₹60",
    "A loaded mix of exotic vegetables, crisped to order.",
    { image: itemPhotos.exoticVeggies },
  ),
  p(
    "paneer-bhurji-pakoda",
    "Paneer Bhurji Pakoda",
    "₹60",
    "Masala paneer bhurji stuffed and fried till golden.",
    { image: itemPhotos.paneerBhurji, featured: true },
  ),
  p(
    "cheese-burst-pakoda",
    "Cheese Burst Pakoda",
    "₹70",
    "Molten cheese centre, crunchy outside. The one you photograph.",
    { image: itemPhotos.cheeseBurst, featured: true },
  ),

  p(
    "dalwada",
    "Dalwada",
    "₹100 / 100g",
    "Vadodara's beloved lentil fritters — crisp outside, soft within.",
    { category: "bhajiya", image: itemPhotos.dalwada },
  ),
  p(
    "methi-gota",
    "Methi Gota",
    "₹40",
    "Fenugreek-spiked Gujarati gota, fried fresh through the day.",
    { category: "bhajiya", image: itemPhotos.methiGota },
  ),
  p(
    "bataka-na-bhajiya",
    "Bataka Na Bhajiya",
    "₹40",
    "Thin potato rounds in a light besan batter.",
    { category: "bhajiya", image: itemPhotos.batakaBhajiya },
  ),
  p(
    "marcha-na-bhajiya",
    "Marcha Na Bhajiya",
    "₹40",
    "Whole chillies battered and fried — for the brave.",
    { category: "bhajiya", image: itemPhotos.mirchiBhajiya },
  ),

  p(
    "mumbaya-vadapav",
    "Mumbaya Vadapav",
    "₹20",
    "The straight-up Mumbai classic with dry garlic chutney.",
    { category: "vadapav", image: itemPhotos.mumbaiVadapav },
  ),
  p("butter-vadapav", "Butter Vadapav", "₹25", "Pav toasted in butter, vada hot off the kadhai.", {
    category: "vadapav",
    image: itemPhotos.mumbaiVadapav,
  }),

  p("masala-vadapav", "Masala Vadapav", "₹35", "Loaded with house masala and chutneys.", {
    category: "vadapav",
    image: itemPhotos.masalaVadapav,
  }),
  p(
    "cheese-butter-vadapav",
    "Cheese Butter Vadapav",
    "₹40",
    "Butter, cheese, vada. No further questions.",
    { category: "vadapav", image: itemPhotos.cheeseVadapav, featured: true },
  ),

  p("butter-milk", "Butter Milk", "₹20", "Chilled, lightly spiced chaas to cool the spice down.", {
    category: "mojito",
    image: itemPhotos.buttermilk,
  }),
  p("classic-mojito", "Classic Mojito", "₹70", "Lime, mint and fizz over ice.", {
    category: "mojito",
    image: itemPhotos.classicMojito,
  }),
  p("watermelon-mojito", "Watermelon Mojito", "₹70", "Fresh watermelon, mint and lime.", {
    category: "mojito",
    image: itemPhotos.watermelonMojito,
  }),
  p(
    "cold-cocoa",
    "Cold Cocoa With Ice Cream",
    "₹80",
    "Thick cold cocoa topped with a scoop of ice cream.",
    { category: "mojito", image: itemPhotos.coldCocoa },
  ),

  p(
    "veg-sandwich",
    "Veg Sandwich",
    "2 Slice ₹80 · 3 Slice ₹100",
    "Fresh veggies and chutney between soft slices.",
    {
      category: "sandwich",
      image: itemPhotos.vegSandwich,
      priceOptions: [
        { label: "2 Slice", price: "₹80" },
        { label: "3 Slice", price: "₹100" },
      ],
    },
  ),
  p(
    "aloo-cheese-grill",
    "Aloo Cheese Grill",
    "2 Slice ₹90 · 3 Slice ₹120",
    "Spiced aloo and cheese, grilled till crisp.",
    {
      category: "sandwich",
      image: itemPhotos.alooCheeseGrill,
      priceOptions: [
        { label: "2 Slice", price: "₹90" },
        { label: "3 Slice", price: "₹120" },
      ],
    },
  ),
  p(
    "paneer-bhurji-grill",
    "Paneer Bhurji Grill",
    "2 Slice ₹90 · 3 Slice ₹120",
    "Masala paneer bhurji, grilled hot.",
    {
      category: "sandwich",
      image: itemPhotos.paneerBhurjiGrill,
      priceOptions: [
        { label: "2 Slice", price: "₹90" },
        { label: "3 Slice", price: "₹120" },
      ],
    },
  ),
  p(
    "mexicen-cheese-grill",
    "Mexicen Cheese Grill",
    "2 Slice ₹90 · 3 Slice ₹120",
    "Mexican-style spiced filling with plenty of cheese.",
    {
      category: "sandwich",
      image: itemPhotos.mexicanGrill,
      priceOptions: [
        { label: "2 Slice", price: "₹90" },
        { label: "3 Slice", price: "₹120" },
      ],
    },
  ),

  p(
    "salted-french-fries",
    "Salted French Fries",
    "Regular ₹60 · Cheese ₹70",
    "Hot, salted and crisp. Add cheese if you must (you must).",
    {
      category: "fries",
      image: itemPhotos.frenchFries,
      priceOptions: [
        { label: "Regular", price: "₹60" },
        { label: "Cheese", price: "₹70" },
      ],
    },
  ),
  p(
    "peri-peri-french-fries",
    "Peri Peri French Fries",
    "Regular ₹70 · Cheese ₹80",
    "Tossed in peri peri masala.",
    {
      category: "fries",
      image: itemPhotos.periPeriFries,
      priceOptions: [
        { label: "Regular", price: "₹70" },
        { label: "Cheese", price: "₹80" },
      ],
    },
  ),

  p("ice-tea", "Ice Tea", "₹60", "Chilled iced tea over plenty of ice.", {
    category: "beverages",
    image: itemPhotos.iceTea,
  }),
  p("lemon-ice-tea", "Lemon Ice Tea", "₹60", "Zesty lemon iced tea.", {
    category: "beverages",
    image: itemPhotos.lemonIceTea,
  }),
  p("peach-ice-tea", "Peach Ice Tea", "₹60", "Sweet peach iced tea.", {
    category: "beverages",
    image: itemPhotos.peachIceTea,
  }),
  p("guava-ice-tea", "Guava Ice Tea", "₹60", "Guava iced tea with a desi twist.", {
    category: "beverages",
    image: itemPhotos.guavaIceTea,
  }),

  p("chocolate-chips-shake", "Chocolate Chips", "₹80", "Thick chocolate chip shake.", {
    category: "shakes",
    image: itemPhotos.chocolateChips,
  }),
  p("french-vanilla-shake", "French Vanilla", "₹80", "Creamy French vanilla shake.", {
    category: "shakes",
    image: itemPhotos.frenchVanilla,
  }),
  p("strawberry-shake", "Strawberry", "₹80", "Fresh, fruity strawberry shake.", {
    category: "shakes",
    image: itemPhotos.strawberry,
  }),
  p("cold-coffee", "Cold Coffee", "₹80", "Chilled, frothy cold coffee.", {
    category: "shakes",
    image: itemPhotos.coldCoffee,
  }),
];

export const story = {
  title: "A craving with a story.",
  intro:
    "Jalaram Nasta House holds a cherished place in the hearts of food enthusiasts, renowned for its legendary Bread Pakoda in Chokhandi, Vadodara.",
  timeline: [
    {
      year: "Before",
      title: "The Beginning",
      copy: "Our story started with our founder — a talented pakoda maker with years of experience and a passion for creating a variety of pakodas in Surat.",
    },
    {
      year: "1987",
      title: "The Journey",
      copy: "Our founder ventured to Vadodara and introduced the innovative concept of making pakodas using bread — the beginning of the bread pakodawala legacy.",
    },
    {
      year: "Chokhandi",
      title: "Vadodara",
      copy: "Jalaram Nasta House became a beloved destination for food enthusiasts, known across the city for one thing above all: Bread Pakoda.",
    },
    {
      year: "Today",
      title: "Today",
      copy: "We continue to honour our roots by serving delicious and unique bread pakodas that delight our valued customers, every single day.",
    },
  ],
};

export const franchiseBenefits = [
  {
    title: "Established Brand",
    copy: "Your gateway to franchise success.",
  },
  {
    title: `Reputed Since ${brand.since}`,
    copy: "Most delightful bread pakoda since ages.",
  },
  {
    title: "Proven Business Model",
    copy: "Ensures operational efficiency and profitability.",
  },
  {
    title: "Growth Opportunities",
    copy: "Open multiple outlets and grow your business.",
  },
  {
    title: "Reduced Risk",
    copy: "A proven model with a track record of success.",
  },
];

export const franchiseIntro =
  "Join the success story of Jalaram Nasta House and become a part of our flavourful journey. We offer franchise opportunities for passionate individuals who share our love for bread pakoda — a chance to bring the irresistible taste of our famous Bread Pakoda to new markets.";

export const franchiseFaqs = [
  {
    q: "What does the franchise include?",
    a: "A franchise partnership with Jalaram Nasta House is built on an established brand, a proven business model and operational support. Exact inclusions are shared by our team during the enquiry process.",
  },
  {
    q: "What investment is required?",
    a: "Investment details are not published online. Share your city and preferred location through the form and our team will walk you through the current numbers.",
  },
  {
    q: "Which cities are open?",
    a: "We are open to conversations across Gujarat and beyond. Tell us your city in the enquiry form.",
  },
  {
    q: "How long does the process take?",
    a: "After your enquiry, our team reviews the location and gets in touch to discuss the next steps.",
  },
];

/** Reviews are intentionally empty — no verified customer reviews available. */
export const reviews: { name: string; text: string; stars: number }[] = [];

export const locations = [
  {
    name: "Jalaram Nasta House — Chokhandi",
    address: "Chokhandi, Vadodara, Gujarat",
    phoneDisplay: brand.phoneDisplay,
    phoneHref: brand.phoneHref,
    hours: brand.hours,
    mapsUrl: brand.mapsUrl,
    flagship: true,
  },
];

/**
 * City expansion badges. Only Vadodara is a real, verified outlet.
 * Surat / Ahmedabad are shown as "Coming soon" with NO invented address,
 * map link or launch date.
 */
export const cities = [
  {
    id: "vadodara",
    name: "Vadodara",
    status: "available",
    note: "Chokhandi — where it all started in 1987.",
  },
  {
    id: "surat",
    name: "Surat",
    status: "coming-soon",
    note: "We're bringing the Bread Pakodawala craving to Surat soon.",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    status: "coming-soon",
    note: "We're bringing the Bread Pakodawala craving to Ahmedabad soon.",
  },
] as const;

export type City = (typeof cities)[number];
