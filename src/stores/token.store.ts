import { create, GetState, SetState } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TokenStore = {
  accessToken: string | null;
  refreshToken: string | null;
};

type TokenActions = {
  setAccessToken: (value: string | null) => void;
  setRefreshToken: (value: string | null) => void;
};

const useTokenStore = create<TokenStore & TokenActions>()(
  persist(
    (
      set: SetState<TokenStore & TokenActions>,
      get: GetState<TokenStore & TokenActions>
    ) => ({
      accessToken: null,
      refreshToken: null,
      setAccessToken: (value) => set({ accessToken: value }),
      setRefreshToken: (value) => set({ refreshToken: value }),
    }),
    {
      name: "token-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTokenStore;
