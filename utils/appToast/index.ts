import { toast } from "react-toastify";

export const appToast = (message: string, type = "success") => {
    return toast[type](message, {
        autoClose: false,
    });
};
