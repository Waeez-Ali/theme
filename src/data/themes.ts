import {
  Image3,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  HeroSliderImage
} from "@/assets/images"

import { Chrome, Edge, Firefox } from "@/assets/icons"

export const THEMES = [
  { id: 1, title: "Among Us Wallpaper", image: Image8 },
  { id: 2, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 3, title: "Austin Wallpaper", image: Image10 },
  { id: 4, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 5, title: "Clownfish Wallpaper", image: Image12 },
  { id: 6, title: "Among Us Wallpaper", image: Image8 },
  { id: 7, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 8, title: "Austin Wallpaper", image: Image10 },
  { id: 9, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 10, title: "Clownfish Wallpaper", image: Image12 },
  { id: 11, title: "Among Us Wallpaper", image: Image8 },
  { id: 12, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 13, title: "Austin Wallpaper", image: Image10 },
  { id: 14, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 15, title: "Clownfish Wallpaper", image: Image12 },
  { id: 16, title: "Among Us Wallpaper", image: Image8 },
  { id: 17, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 18, title: "Austin Wallpaper", image: Image10 },
  { id: 19, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 20, title: "Clownfish Wallpaper", image: Image12 },
  { id: 21, title: "Among Us Wallpaper", image: Image8 },
  { id: 22, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 23, title: "Austin Wallpaper", image: Image10 },
  { id: 24, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 25, title: "Clownfish Wallpaper", image: Image12 },
  { id: 26, title: "Among Us Wallpaper", image: Image8 },
  { id: 27, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 28, title: "Austin Wallpaper", image: Image10 },
  { id: 29, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 30, title: "Clownfish Wallpaper", image: Image12 },
  { id: 31, title: "Among Us Wallpaper", image: Image8 },
  { id: 32, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 33, title: "Austin Wallpaper", image: Image10 },
  { id: 34, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 35, title: "Clownfish Wallpaper", image: Image12 },
  { id: 36, title: "Among Us Wallpaper", image: Image8 },
  { id: 37, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 38, title: "Austin Wallpaper", image: Image10 },
  { id: 39, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 40, title: "Clownfish Wallpaper", image: Image12 },
  { id: 41, title: "Among Us Wallpaper", image: Image8 },
  { id: 42, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 43, title: "Austin Wallpaper", image: Image10 },
  { id: 44, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 45, title: "Clownfish Wallpaper", image: Image12 },
  { id: 46, title: "Among Us Wallpaper", image: Image8 },
  { id: 47, title: "Sticky Notes Wallpaper", image: Image9 },
  { id: 48, title: "Austin Wallpaper", image: Image10 },
  { id: 49, title: "Motivational Quote Wallpaper", image: Image11 },
  { id: 50, title: "Clownfish Wallpaper", image: Image12 }
]

export const browsers = [
  { id: 1, name: "Edge", icon: Edge  },
  { id: 2, name: "Chrome", icon: Chrome  },
  { id: 3, name: "Firefox", icon: Firefox  },
]

export const browserstab = [
  { id: 1, name: "Edge Guide", icon: Edge, route: "/tab-edge" },
  { id: 2, name: "Chrome Guide", icon: Chrome, route: "/tab-chrome" },
  { id: 3, name: "Firefox Guide", icon: Firefox, route: "/tab-firefox" },
];

import type { SlideType } from "@/type/types";

export const SLIDES: SlideType[] = [
  {
    id: 1,
    image: Image3,
    title: "Check out our themes below or",
    subtitle: " build your own!",
    description:"All new tab apps are 100% ad-free and do not track any user data.",
    titleColor: "text-text-blue",
    subtitleColor: "text-gradient",
    descriptionColor: "text-text-blue",
    buttonBorder: "border-light-blue",
    buttonText: "text-text-blue",
    bottomTitle: "We are excited to have you!" // optional, ab safe
  },
  {
    id: 2,
    image: HeroSliderImage,
    title: "Mountain Nature View",
    subtitle: "Chrome Extension",
  },
  {
    id: 3,
    image: HeroSliderImage,
    title: "Dark Abstract Art",
    subtitle: "Firefox Add-on",
  },
  {
    id: 4,
    image: HeroSliderImage,
    title: "Minimal Workspace",
    subtitle: "Safari Extension",
  },
];
