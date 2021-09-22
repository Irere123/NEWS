declare namespace NodeJS {
  interface ProcessEnv {
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_HOST: string;
    REDIS_URL: string;
    SESSION_SECRET: string;
  }
}
