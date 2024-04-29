import { create } from "zustand";

export interface StudioItem {
  name: string;
  website: string;
  length: string;
  width: string;
  country: string;
  tags: string[];
  image: string | null;
  phoneNumbers: { name: string; phoneNumber: string }[];
  emails: { name: string; email: string }[];
  socialNetworks: { name: string; link: string }[];
}

interface StudioState {
  studioItem: StudioItem;
  setStudioItem: (field: string, value: any) => void;
  setImage: (image: string | null) => void;
  addPhoneNumber: (phoneNumber: { name: string; phoneNumber: string }) => void;
  addEmail: (email: { name: string; email: string }) => void;
  addSocialNetwork: (socialNetwork: { name: string; link: string }) => void;
}

const useStudioStore = create<StudioState>((set) => ({
  studioItem: {
    name: "",
    website: "",
    length: "",
    width: "",
    tags: [],
    image: null,
    phoneNumbers: [],
    emails: [],
    socialNetworks: [],
    country: "",
  },
  setStudioItem: (field, value) =>
    set((state) => ({
      studioItem: {
        ...state.studioItem,
        [field]: value,
      },
    })),
  setImage: (image) =>
    set((state) => ({
      studioItem: {
        ...state.studioItem,
        image: image,
      },
    })),
  addPhoneNumber: (phoneNumber) =>
    set((state) => ({
      studioItem: {
        ...state.studioItem,
        phoneNumbers: [...state.studioItem.phoneNumbers, phoneNumber],
      },
    })),
  addEmail: (email) =>
    set((state) => ({
      studioItem: {
        ...state.studioItem,
        emails: [...state.studioItem.emails, email],
      },
    })),
  addSocialNetwork: (socialNetwork) =>
    set((state) => ({
      studioItem: {
        ...state.studioItem,
        socialNetworks: [...state.studioItem.socialNetworks, socialNetwork],
      },
    })),
}));

export default useStudioStore;
