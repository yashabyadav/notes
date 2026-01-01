// quartz/themes.ts
// Centralized color palettes for different themes

import { Darkmode } from "./components"

export type ThemePalette = {
  lightMode: Record<string, string>,
  darkMode: Record<string, string>,
}

export const palettes: Record<string, ThemePalette> = {
  blueTopaz: {
    lightMode: {
      light: "#f8f8f8",
      lightgray: "#e8e8e8",
      gray: "#7f7f7f",
      darkgray: "#2a2a2a",
      dark: "#1a1a1a",
      secondary: "#2d82cc",
      tertiary: "#52c7b2",
      highlight: "rgba(45, 130, 204, 0.12)",
      textHighlight: "#ffd35188",
    },
    darkMode: {
      light: "#151515",
      lightgray: "#222222",
      gray: "#4a4a4a",
      darkgray: "#c6c6c6",
      dark: "#e4e4e4",
      secondary: "#88C0D0",
      tertiary: "#a4ca8e",
      highlight: "rgba(136, 192, 208, 0.12)",
      textHighlight: "#ebcb8b55",
    },
  },
  nord: {
    lightMode: {
      light: "#ECEFF4",
      lightgray: "#E5E9F0",
      gray: "#4C566A",
      darkgray: "#2E3440",
      dark: "#3B4252",
      secondary: "#5E81AC",
      tertiary: "#81A1C1",
      highlight: "rgba(94, 129, 172, 0.12)",
      textHighlight: "#EBCB8B88",
    },
    darkMode: {
      light: "#2E3440",
      lightgray: "#3B4252",
      gray: "#D8DEE9",
      darkgray: "#ECEFF4",
      dark: "#E5E9F0",
      secondary: "#8FBCBB",
      tertiary: "#88C0D0",
      highlight: "rgba(143, 188, 187, 0.12)",
      textHighlight: "#EBCB8B55",
    },
  },
  gruvbox: {
    lightMode: {
      light: "#fbf1c7",
      lightgray: "#ebdbb2",
      gray: "#928374",
      darkgray: "#3c3836",
      dark: "#282828",
      secondary: "#b57614",
      tertiary: "#98971a",
      highlight: "rgba(184, 187, 38, 0.12)",
      textHighlight: "#fabd2f88",
    },
    darkMode: {
      light: "#282828",
      lightgray: "#3c3836",
      gray: "#a89984",
      darkgray: "#ebdbb2",
      dark: "#fbf1c7",
      secondary: "#d79921",
      tertiary: "#b8bb26",
      highlight: "rgba(216, 153, 33, 0.12)",
      textHighlight: "#fabd2f55",
    },
  },
  kingArthur: {
    lightMode: {
      light: "#D4D4CA", //page background
      lightgray: "#708D81", //borders
      gray: "#363432",//docs says that this field should color the graph links but the graph view is completely blank
      darkgray: "#0A0D0A", //body text
      dark: "#803329", //headers and icons
      secondary: "#91362F", // color of the graph nodes
      tertiary: "#B8BBA5", //hover states and visited graph nodes
      highlight: "rgba(161, 98, 7, 0.12)", //internal link background, highlighted text, highlighted lines of code
      textHighlight: "#F4D58D88", //markdown highlighted text background
    },
     darkMode: {
        light: "#0A0D0A", //page background
        lightgray: "#708D81", //borders
        gray: "#363432",// graph links color
        darkgray: "#D4D4CA", //body text
        dark: "#803329", //headers and icons
        secondary: "#91362F", // node color in graph view
        tertiary: "#B8BBA5", //hover states and visited graph nodes
        highlight: "rgba(161, 98, 7, 0.12)", //internal link background, highlighted text, highlighted lines of code
        textHighlight: "#F4D58D88", //markdown highlighted text background
      },



    }
  }
