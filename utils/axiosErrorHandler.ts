import { AxiosError, AxiosResponse } from 'axios';
import { appToast } from './appToast';

const axiosErrorHandler = (error: unknown, isSuperAdmin: boolean = false) => {
  const err = error as AxiosError;
  if (!err.isAxiosError) {
    appToast('Something Went Wrong!', 'error');
    return;
  }

  if (err.code && err.code === 'ERR_NETWORK') {
    appToast(err.message, 'error');
    return;
  }

  if (err.response) {
    const res = err.response as AxiosResponse;
    const data = res.data;
    const message: string | string[] = data.message;

    if (err.response.status === 401) {
      appToast('Your session has expired. Please sign in again.', 'warning');
      return;
    }

    if (Array.isArray(message)) {
      appToast(message[0], 'error');
      return;
    }

    if (err.request.responseURL) {
      appToast(message, 'error');
      return;
    }

    appToast(message, 'error');
  }
};

export { axiosErrorHandler };
