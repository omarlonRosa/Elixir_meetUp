
// src/utils/toastNotify.js
import { toast } from "react-toastify";

export const notify = (type, message) => {
  const baseConfig = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  switch (type) {
    case "success":
      toast.success(message, baseConfig);
      break;
    case "error":
      toast.error(message, baseConfig);
      break;
    case "info":
      toast.info(message, baseConfig);
      break;
    case "warn":
      toast.warn(message, baseConfig);
      break;
    default:
      toast(message, baseConfig);
  }
};

