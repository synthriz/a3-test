// generatecontent.cjs

// esse script gera 10 arquivos .json com conteudo filler para o CMS Tina,
// salvando em "content/paginatemplate1"

const fs = require('fs'); // modulo do node para trabalhar com sistema de arquivos
const path = require('path'); // modulo para manipular caminhos de arquivos
const { faker } = require('@faker-js/faker'); // lib pra gerar dados falsos realistas

// diretório onde os arquivos JSONs vao ser salvos => content/pagetemplate1
const outputDir = path.join(process.cwd(), 'content', 'paginatemplate1');

// garante q o diretorio exista (ou cria, caso nao exista)
fs.mkdirSync(outputDir, { recursive: true });

// loopzinho pra gerar i arquivos (page-i.json)
for (let i = 1; i <= 10; i++) {
    // gerando dados falsos pra preencher o conteudo do JSON
  const titulo = faker.lorem.sentence();
  const descricao = faker.lorem.paragraph();
  const imagem = faker.image.url();
  const slug = `page-${i}`;
  const footer = faker.lorem.sentence();

  // juntando tudo nessa const aqui
  const data = { titulo, descricao, imagem, slug, footer };

  // definindo o caminho e o nome do arquivo que vai ser salvo
  const filePath = path.join(outputDir, `${slug}.json`);

  // escreve o conteudo no arquivo JSON, com uma identacao de 2 espacinhos
  //stringify como sugere, transforma o JSON em STRING
  // JSON.stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

  //para fins de debug
  console.log(`Gerado: ${filePath}`);
}
