import { toastUtility } from "@/utilities/toast.utility";
import { create } from "zustand";

interface AuthState {
  showVerifyEmail: boolean;
  restorePassword: boolean;
  setShowVerifyEmail: (value: boolean) => void;
  setRestorePassword: (value: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  showVerifyEmail: false,
  restorePassword: false,

  setShowVerifyEmail: (value) => set({ showVerifyEmail: value }),
  setRestorePassword: (value) => {
    set({ restorePassword: value });
    if (value) {
      toastUtility.showSuccess("Перевірте пошту.");
    }
  },
}));

export default useAuthStore;
