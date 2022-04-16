import React from 'react';
import api from '../AxiosConfig/Config';

type Notification = 'success' | 'error' | 'warning' | 'info'

const AxiosErrorHandler = () => {
  const openNotificationWithIcon = (type: Notification, message: string, route?: string) => {
    alert( `${type}\n${message}`);
  };

  api.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    const message = error?.response?.data?.message;
    const url = error?.response?.config.url;

    if (error.response && error?.response?.status === 400) {
      openNotificationWithIcon('error', message, url);
      return Promise.reject(error);
    } 
    return;
  });


  return <></>;
};

export default AxiosErrorHandler;
