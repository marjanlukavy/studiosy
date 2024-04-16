import { toast } from "react-toastify";

export const toastUtility = {
  showSuccess(text: string) {
    toast.success(text, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  },

  showError(text: string) {
    toast.error(text, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  },
};

// Example
// <- Success ->toastUtility.showSuccess("Promocode is valid");
// <- Error ->  toastUtility.showError("Promocode is not valid");
