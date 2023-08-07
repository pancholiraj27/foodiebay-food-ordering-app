declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_LOGIN_DOMAIN: string;
      REACT_APP_LOGIN_CLIENT_ID: string;
    }
  }
}

export {};
