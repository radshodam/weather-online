import { create } from 'zustand';

const useLocationStore = create((set) => ({
    location: {latitude: 1, longitude: 1 },
setLocation: (latitude, longitude) => set({ location: { latitude, longitude } }),
}));

export default useLocationStore;
