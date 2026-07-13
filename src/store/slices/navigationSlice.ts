import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeCategory: string | null;
}

const initialState: NavigationState = {
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
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<string | null>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen, setScrolled, setActiveCategory } = navigationSlice.actions;
export default navigationSlice.reducer;
