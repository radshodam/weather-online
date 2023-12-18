// toggleStore.js
import { create } from "zustand";

export const useToggleStore = create((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
}));

export const useToggleDegreeStore = create((set) => ({
  isToggledDegree: false,
  toggleDegree: () => set((state) => ({ isToggledDegree: !state.isToggledDegree })),
}));

