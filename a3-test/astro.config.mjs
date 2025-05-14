// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // define que o diretorio de conteudo é "content" na raiz (<raiz>/content),
  // e nao "src/content" (ele tava reclamando rs)

  // @ts-ignore
  contentDir: "content",
  
  // outras configs iriam aqui...
});
