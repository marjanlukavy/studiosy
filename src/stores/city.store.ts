import { create } from "zustand";

export type City = {
  longitude: number;
  name: string;
  id: string;
  country: string;
  isoCountryCode: string;
  createdAt: number;
  updatedAt: number;
  latitude: number;
};

type Store = {
  currentCity: City;
  cities?: City[];
};

type Actions = {
  setCurrentCity: (city: City) => void;
};

const defaultCity = {
  longitude: 30.5233,
  name: "Kyiv",
  id: "01AC1E26-2A8E-442B-B92B-579C63194412",
  country: "Ukraine",
  isoCountryCode: "UA",
  createdAt: 1710833542.262105,
  updatedAt: 1710833542.262105,
  latitude: 50.45,
};

const useCityStore = create<Store & Actions>((set) => ({
  currentCity: defaultCity,
  setCurrentCity: (city) => {
    set({
      currentCity: city,
    });
  },
}));

export default useCityStore;
