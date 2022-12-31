import { toast } from "react-toastify";

export const appToast = (message, type = "success") => {
    return toast[type](message, {
        autoClose: false,
    });
};
