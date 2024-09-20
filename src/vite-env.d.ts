/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LAST_COMMIT_DATE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
