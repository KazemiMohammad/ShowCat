export const configureAxiosDefaultHeaders = () => {

  const ajaxHeaders = {
    'x-api-key': '5be9dedb-cfad-4ae4-a037-96c5beed4999',
    'x-requested-with': 'XMLHttpRequest',
    'sec-fetch-mode': 'cors',

    // 'sec-ch-ua-mobile': '?0',
    // 'sec-ch-ua-platform': "Windows",
    // 'sec-fetch-dest': 'empty',
    // 'sec-fetch-site': 'cross-site',
    // 'session-cookie': 'undefined'

  } as any;

  return ajaxHeaders;
};
