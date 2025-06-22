
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isMobileMenuOpen: boolean;
  isLoading: boolean;
  activeSection: string;
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  isLoading: false,
  activeSection: 'hero',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setLoading, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
