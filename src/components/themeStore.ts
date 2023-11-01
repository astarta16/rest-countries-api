import create from "zustand";

type ThemeStore = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  isDarkMode: false,
}));
