// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // define que o diretorio de conteudo é "content" na raiz (<raiz>/content),
  // e nao "src/content" (ele tava reclamando rs)

  // @ts-ignore
  contentDir: "content",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  
  // outras configs iriam aqui...
});
