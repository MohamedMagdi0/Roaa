import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageDirection = "ltr" | "rtl";
type Language = "en" | "ar";

interface LanguageState {
  currentLanguage: Language;
  direction: LanguageDirection;
}

const initialState: LanguageState = {
  currentLanguage: "en",
  direction: "ltr",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state: LanguageState, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
      state.direction = action.payload === "ar" ? "rtl" : "ltr";
      // Update document direction
      document.documentElement.dir = state.direction;
      document.documentElement.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
