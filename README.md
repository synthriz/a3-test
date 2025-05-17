
# 💼 A3 Media Web Designer Teste

Este projeto é uma solução para o desafio técnico proposto pela **A3 Media**, no qual foi solicitado replicar duas páginas de funil, transformá-las em templates Astro + TinaCMS, e gerar **1000 variações únicas** de cada uma usando conteúdo dinâmico.

### 🚀 Deploy
- https://a3-test.surge.sh/

<br/>

<details>
    <summary>TO-DO</summary>
  <ul>
    <li>All done! ;)</li>
  </ul>
</details>

## 📚 Glossário / Índice

- [🧩 Referência do desafio](#-referência-do-desafio)  
- [✨ Funcionalidades](#-funcionalidades)  
- [🛠 Stack utilizada](#-stack-utilizada)  
- [⚙️ Como rodar localmente](#️-como-rodar-localmente)
- [🧪 Como usar](#-como-usar)  
- [🧾 Estrutura do projeto](#-estrutura-do-projeto)  
- [📷 Exemplo de conteúdo gerado](#-exemplo-de-conteúdo-gerado)  
- [🌈 Estilo](#-estilo)  
- [🧠 Processo de pensamento e lógica de raciocínio](#-processo-de-pensamento-e-lógica-de-raciocínio)

## 🧩 Referência do desafio

> Copiar páginas de duas etapas do funil de concorrentes, transformá-las em templates, e criar 1000 cópias dinâmicas de cada com conteúdo via CMS.

- [Template 1 original](https://getflowempower.com/ps/pscollins01)
- [Template 2 original](https://glucosecontrolguide.com/fb/sgs/vsl3/prn-ca1/h1l1/)

## ✨ Funcionalidades

- ✅ Templates fiéis aos originais  
- ✅ 1000 páginas únicas por template  
- ✅ Slugs dinâmicos: `/paginatemplate1/page-1` até `/page-1000`  
- ✅ Integração completa com **TinaCMS** e conteúdo alimentado por **faker-js**  
- ✅ Formulário para acessar páginas diretamente pelo número 
- ✅ Estilo customizado com **Tailwind**

## 🛠 Stack utilizada

- [Astro](https://astro.build/)  
- [TinaCMS](https://tina.io/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [@faker-js/faker](https://fakerjs.dev/)  
- Javascript
- TypeScript  

## ⚙️ Como rodar localmente

1. **Clone o repositório**

```bash
git clone https://github.com/synthriz/a3-test.git
cd a3-test
cd a3-test
```

2. **Instale as dependências**

```bash
npm install
```

3. **Rode o projeto**

```bash
npm run dev
```

4. **Acesse [http://localhost:4321](http://localhost:4321) no navegador.**

## 🧪 Como usar
Na página inicial (`/`), há dois campos de busca:

-   Digite um número de 1 a 1000 para acessar uma página clonada
    
-   Exemplo:
    
    -   `/paginatemplate1/page-123`
        
    -   `/paginatemplate2/page-789`
      
    -   `/paginatemplate3/page-3`
      
    -   `/paginatemplate4/page-10`
        

Todo conteúdo (título, descrição, imagem e footer) vem do CMS e foi gerado com faker-js.

## 🧾 Estrutura do projeto

```bash
├── content/
│   ├── paginatemplate1/
│   ├── paginatemplate2/
│   ├── paginatemplate3/
│   └── paginatemplate4/
├── src/
│   ├── pages/
│   │     ├── paginatemplate1/
│   │     ├── paginatemplate2/
│   │     ├── paginatemplate3/
│   │     └── paginatemplate4/
│   └── components/
├── scripts/
│   ├── generateContent.cjs/
│   ├── generateContent2.cjs/
│   ├── generateContent3.cjs/
│   └── generateContent4.cjs/
├── public/
├── tina/
├── astro.config.mjs
├── package.json
├── tsconfig.json
```

## 📷 Exemplo de conteúdo gerado

```json
{
  "titulo": "Argentum viscus solio vaco similique.",
  "descricao": [
    "Bis taceo arcesso theologus...",
    "..."
  ],
  "imagem": "https://picsum.photos/seed/abc123/1920/1080",
  "slug": "page-589",
  "footer": [
    "Assumenda sumptus saepe...",
    "..."
  ]
}
```

## 🌈 Estilo
O site utiliza um **gradiente verde-escuro + verde-esmeralda**, inspirado na identidade visual da A3-Media.
Todos os estilos foram criados com Tailwind e são responsivos.

## 🧠 Processo de pensamento e lógica de raciocínio

Para resolver o desafio, minha abordagem seguiu estes passos:

1. **Análise das páginas originais:**  
   Estudei as duas páginas do funil para entender a estrutura, elementos, layout e conteúdo dinâmico necessários.

2. **Criação dos templates Astro:**  
   Reproduzi as páginas com componentes Astro para garantir modularidade e fácil manutenção. Usei o Tailwind para estilização rápida e responsiva, mantendo a identidade visual.

3. **Integração com TinaCMS:**  
   Configurei collections no TinaCMS para as duas páginas, permitindo edição do conteúdo direto pelo painel. Isso facilita atualizações sem alterar o código.

4. **Geração de conteúdo dinâmico via faker-js:**  
   Para simular 1000 variações únicas, criei um script (executado durante o build) que gera arquivos JSON para cada página clonada dentro das pastas `content/paginatemplate1/`, `content/paginatemplate2/`, `content/paginatemplate3/` e `content/paginatemplate4/`.
   > Por limitações do deploy, os templates 3 e 4 vão de 1 a 10 apenas.

   - Cada arquivo JSON contém campos como título, descrição, imagens e footer, todos preenchidos com dados gerados pelo faker-js.
   - Isso garante que cada página tenha conteúdo único e reflita a edição via CMS.

6. **Roteamento dinâmico:**  
   As páginas são acessadas via URLs do tipo `/paginatemplate1/page-{n}`, onde `{n}` varia de 1 a 1000, fazendo o Astro carregar o conteúdo correto baseado no JSON correspondente.

7. **UX para acesso direto:**  
   Criei uma interface na homepage para que o usuário possa digitar o número da página desejada e abrir o respectivo template numa nova aba, com validação para garantir que o número esteja entre 1 e 1000.

Essa linha de raciocínio garantiu uma solução escalável, modular e facilmente extensível para diferentes funis ou variações futuras, aproveitando o poder do CMS e conteúdo dinâmico.
