import { create } from 'zustand';

const useLocationGeoStore = create((set) => ({
    locationGeo: { latitude: null, longitude: null },
    setLocationGeo: (latitude, longitude) => set({ locationGeo: { latitude, longitude } }),
}));

export default useLocationGeoStore;
