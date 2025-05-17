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
          {
            type: 'string',
            name: 'company',
            label: 'Empresa Ficticia'
          }
        ],
      },
      // collection template2
      {
        name: 'paginatemplate2', //nome
        label: 'Página Template 2', //label da coleçao
        path: 'content/paginatemplate2', //caminho da coleçao
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
            name: 'topicos',
            label: 'Tópicos',
          },
          {
            type: 'string',
            name: 'imagem',
            label: 'URL da Imagem',
          },
          {
            type: 'string',
            name: 'video',
            label: 'URL da Imagem(Video)',
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
          {
            type: 'string',
            name: 'footer2',
            label: 'Footer Texto secundário'
          }
        ],
      },
      // collection template3
      {
        name: 'paginatemplate3', //nome
        label: 'Página Template 3', //label da coleçao
        path: 'content/paginatemplate3', //caminho da coleçao
        format: 'json', //formato da coleçao, que é JSON mas poderia ser markdown tb
        fields: [
          // campos da coleçao abaixo
          {
            type: 'string',
            name: 'doutor',
            label: 'Nome Doutor',
          },
          {
            type: 'string',
            name: 'doutorImg',
            label: 'URL da Imagem do Doutor',
          },
          {
            type: 'string',
            name: 'exp',
            label: 'Anos de Experiência',
          },
          {
            type: 'string',
            name: 'dias',
            label: 'Dias para funcionar',
          },
          {
            type: 'string',
            name: 'depoimento1',
            label: 'Depoimento 1',
          },
          {
            type: 'string',
            name: 'depoimento2',
            label: 'Depoimento 2',
          },
          {
            type: 'string',
            name: 'pessoa1',
            label: 'Pessoa 1',
          },
          {
            type: 'string',
            name: 'pessoa2',
            label: 'Pessoa 2',
          },
          {
            type: 'string',
            name: 'beneficios',
            label: 'Lista de Benefícios'
          },
          {
            type: 'string',
            name: 'estoque',
            label: 'Quantidade em estoque'
          },
          {
            type: 'string',
            name: 'pais',
            label: 'País'
          },
          {
            type: 'string',
            name: 'company',
            label: 'Empresa'
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug (URL)',
          },
        ],
      },
      // collection template4
      {
        name: 'paginatemplate4', //nome
        label: 'Página Template 4', //label da coleçao
        path: 'content/paginatemplate4', //caminho da coleçao
        format: 'json', //formato da coleçao, que é JSON mas poderia ser markdown tb
        fields: [
          // campos da coleçao abaixo
          {
            type: 'string',
            name: 'nomeProduto',
            label: 'Nome do Produto',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'destaque',
            label: 'Frase de Destaque',
          },
          {
            type: 'string',
            name: 'beneficios',
            label: 'Lista de Benefícios'
          },
          {
            type: 'string',
            name: 'adjetivos',
            label: 'Adjetivos do produto'
          },
          {
            type: 'string',
            name: 'imagemProduto',
            label: 'Imagem Produto',
          },
          {
            type: 'string',
            name: 'depoimento1',
            label: 'Depoimento 1',
          },
          {
            type: 'string',
            name: 'depoimento2',
            label: 'Depoimento 2',
          },
          {
            type: 'string',
            name: 'pessoa1',
            label: 'Nome da pessoa 1',
          },
          {
            type: 'string',
            name: 'pessoa2',
            label: 'Nome da pessoa 2',
          },
          {
            type: 'string',
            name: 'ctaTexto',
            label: 'Texto do botão principal',
          },
          {
            type: 'string',
            name: 'ctaSecundario',
            label: 'Chamada secundária',
          },
          {
            type: 'string',
            name: 'ctaTerciario',
            label: 'Chamada terciária',
          },
          {
            type: 'string',
            name: 'company',
            label: 'Nome da Empresa',
          },
          {
            type: 'string',
            name: 'aviso',
            label: 'Texto do aviso no topo',
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug (URL)',
          },
        ],
      },
    ],
  },
});
