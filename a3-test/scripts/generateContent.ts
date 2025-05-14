// => cemitério de código e tentativas abaixo p consultar futuramente


// import * as fs from 'fs'; 
// import * as path from 'path'; 
// import { faker } from '@faker-js/faker';

// const contentDirectory = path.join(process.cwd(), 'src/content/template1'); // diretorio onde os arquivos serao gerados

// // funcai para gerar o conteúdo do arquivo markdown
// const generateMarkdownContent = (slug: string) => {
//   const title = faker.lorem.sentence(); // gera um título aleatório com fakejs
//   const body = faker.lorem.paragraphs(3); // gera um(3) paragrafo aleatorio para o corpo do texto

//   return `---
// title: "${title}"
// slug: "${slug}"
// ---
// ${body}`;
// };

// // funcao pra gerar varios arquivos de conteudo
// const generateContentFiles = (numFiles: number) => {
//   for (let i = 1; i <= numFiles; i++) {
//     const slug = `page-${i}`;
//     const content = generateMarkdownContent(slug);

//     const filePath = path.join(contentDirectory, `${slug}.md`);
//     fs.writeFileSync(filePath, content, 'utf-8');
//     console.log(`Arquivo gerado: ${filePath}`);
//   }
// };

// // gerando 1000 arquivos de conteudo...
// generateContentFiles(1000);

// 

// // define o diretório onde os arquivos JSON serão salvos
// // é onde o tina espera que os arquivos dessa coleção sejam armazenados
// const contentDir = path.join(__dirname, 'content', 'paginatemplate1');

// // cria o diretório caso ele não exista
// // se o diretório não existir esse fs.mkdirSync cria ele
// // {recursive: true } garante que se a estrutura de pastas nao existir, ela vai ser criada tb
// if (!fs.existsSync(contentDir)) {
//   fs.mkdirSync(contentDir, { recursive: true });
// }


// // função p gerar 1000 arquivos de conteúdo
// const generateContent = () => {
  
// // loop de 1 a 1000
//   for (let i = 1; i <= 1000; i++) {
//     const content = {
//       titulo: faker.lorem.sentence(), // titulo aleatório
//       descricao: faker.lorem.paragraph(), // descrição aleatória
//       imagem: faker.image.url(), // url de imagem aleatória
//       slug: `pagina-template-${i}`, // slug unico para cada página (unique identifier)
//     };

//     // caminho do arquivo JSON
//     //usando i do loop p garantir que cada caminho seja unico
//     const filePath = path.join(contentDir, `${i}.json`);

//     // escreve o arquivo JSON com os dados gerados
//     // fs.writeFileSync`escreve o conteudo gerado no JSON
//     // stringify como sugere rs transforma em string
//     // JSON.stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string
//     fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
//   }

//   console.log('conteudo gerado com sucesso!'); //debug
// };

// executa a funçao pra gerar os 1000 arquivos
// generateContent();
