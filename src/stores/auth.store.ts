import { create, GetState, SetState } from "zustand";

type Store = {
  showVerifyEmail: boolean;

  restoreEmail: string;
  resetPassword: string;
  confirmResetPassword: string;

  regEmail: string;
  regPassword: string;
  regConfirmPassword: string;

  logEmail: string;
  logPassword: string;
};

type Actions = {
  setShowVerifyEmail: (value: boolean) => void;

  setRestoreEmail: (value: string) => void;
  setResetPassword: (value: string) => void;
  setConfirmResetPassword: (value: string) => void;

  setRegEmail: (value: string) => void;
  setRegPassword: (value: string) => void;
  setRegConfirmPassword: (value: string) => void;

  setLogEmail: (value: string) => void;
  setLogPassword: (value: string) => void;
};

// checking for existing account
const regExistMockup = {
  regEmail: "t@test.com",
  regPassword: "12345678",
  regConfirmPassword: "12345678",
};

// checking for difference passwords
const regDiffPasswordMockup = {
  regEmail: "t@test.com",
  regPassword: "123456789",
  regConfirmPassword: "12345678",
};

// checking for wrong credentials
const logWrongCredentialsMockup = {
  logEmail: "oleh.orenchuk@gmail.com",
  logPassword: "123456789",
};

// checking for correct credentials
const logOKCredentialsMockup = {
  logEmail: "oleh.orenchuk@gmail.com",
  logPassword: "12345678",
};

const useAuthStore = create<Store & Actions>(
  (set: SetState<Store & Actions>, get: GetState<Store & Actions>) => ({
    showVerifyEmail: false,
    restoreEmail: "",
    resetPassword: "",
    confirmResetPassword: "",
    regEmail: "",
    regPassword: "",
    regConfirmPassword: "",
    logEmail: "",
    logPassword: "",

    // ...regExistMockup,
    // ...regDiffPasswordMockup,
    // ...logWrongCredentialsMockup,
    // ...logOKCredentialsMockup,
    setShowVerifyEmail: (value) => set({ showVerifyEmail: value }),
    setRestoreEmail: (value) => {
      set({ restoreEmail: value });
    },
    setRegPassword: (value) => {
      set({
        regPassword: value,
      });
    },

    setRegEmail: (value) => {
      set({
        regEmail: value,
      });
    },
    setRegConfirmPassword: (value) => {
      set({
        regConfirmPassword: value,
      });
    },
    setLogEmail: (value) =>
      set({
        logEmail: value,
      }),
    setLogPassword: (value) =>
      set({
        logPassword: value,
      }),
    setResetPassword: (value) =>
      set({
        resetPassword: value,
      }),
    setConfirmResetPassword: (value) =>
      set({
        confirmResetPassword: value,
      }),
  })
);

export default useAuthStore;
