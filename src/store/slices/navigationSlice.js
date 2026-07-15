import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isScrolled: false,
  activeCategory: null,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen, setScrolled, setActiveCategory } = navigationSlice.actions;
export default navigationSlice.reducer;
