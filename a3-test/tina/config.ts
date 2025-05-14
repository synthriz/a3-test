import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      // aqui vai a coleçao do template 1, pro tina reconhecer
      {
        name: 'paginatemplate1', //nome
        label: 'Página Template 1', //label da coleçao
        path: 'content/paginatemplate1', //caminho da coleçao
        format: 'json', //formato da coleçao, que é JSON mas poderia ser markdown tb
        fields: [
          // campos da coleçao abaixo
          {
            type: 'string',
            name: 'titulo',
            label: 'Título',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'descricao',
            label: 'Descrição',
          },
          {
            type: 'string',
            name: 'imagem',
            label: 'URL da Imagem',
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug (URL)',
          },
          {
            type: 'string',
            name: 'footer',
            label: 'Footer',
          },
        ],
      },
    ],
  },
});
