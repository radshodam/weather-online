import { create } from 'zustand';

const useWeatherDates = create((set) => ({
    startDate: null,
    endDate: null,
    setStartDate: (newStartDate) => set({ startDate: newStartDate }),
    setEndDate: (newEndDate) => set({ endDate: newEndDate }),
}));

export default useWeatherDates;