import { AxiosError, AxiosResponse } from "axios";
import { appToast } from "./appToast";
import { redirect } from "./redirect";

const axiosErrorHandler = (error: unknown, isSuperAdmin: boolean = false) => {
  const err = error as AxiosError;
  if (!err.isAxiosError) {
    appToast({ message: "Something Went Wrong!", type: "error" });
    return;
  }

  if (err.code && err.code === "ERR_NETWORK") {
    appToast({ message: err.message, type: "error" });
    return;
  }

  if (err.response) {
    const res = err.response as AxiosResponse;
    const data = res.data;
    const message: string | string[] = data.message;

    if (err.response.status === 401) {
      appToast({
        message: "Your session has expired. Please sign in again.",
        type: "warning",
        id: "401",
      });

      redirect({
        path: isSuperAdmin
          ? "/super/signin"
          : `/signin?callbackPath=${location.pathname}`,
      });
      return;
    }

    if (Array.isArray(message)) {
      appToast({ message: message[0], type: "error" });
      return;
    }

    if (err.request.responseURL) {
      appToast({
        message: message,
        type: "error",
        id: err.request.responseURL + err.response.status,
      });
      return;
    }

    appToast({ message: message, type: "error" });
  }
};

export { axiosErrorHandler };
