// generatecontent.cjs para o template 2

// esse script gera 10 arquivos .json com conteudo filler para o CMS Tina,
// salvando em "content/paginatemplate1"

const fs = require('fs'); // modulo do node para trabalhar com sistema de arquivos
const path = require('path'); // modulo para manipular caminhos de arquivos
const { faker } = require('@faker-js/faker'); // lib pra gerar dados falsos realistas

// diretório onde os arquivos JSONs vao ser salvos => content/pagetemplate1
const outputDir = path.join(process.cwd(), 'content', 'paginatemplate2');

// garante q o diretorio exista (ou cria, caso nao exista)
fs.mkdirSync(outputDir, { recursive: true });

// loopzinho pra gerar i arquivos (page-i.json)
for (let i = 1; i <= 10; i++) {
    // gerando dados falsos pra preencher o conteudo do JSON

    // titulo é uma frase com 20 palavras, pra dar certo no layout
    const titulo = faker.lorem.sentence({ min: 10, max: 15 });

    // cria 14 frases(que virarao topicos), separados por \n
    // ref: https://fakerjs.dev/api/lorem.html#sentences
    // não estava gerando os separadores "\n", entao primeiro foi criado um array com os 14 elementos,
    // depois juntou (.join) em uma unica string,
    // pra depois, separar dnv em um array, mas quebrando onde existe \n
    const textoComQuebra = Array.from({ length: 32 }, () => faker.lorem.sentence()).join('\n');
    const topicos = textoComQuebra.split('\n');

    // aqui a imagem, sendo gerada com aspect-video (16:9) pra nao dar problema
    // aparentemente ele acaba repetindo algumas imagens sozinho, nao sei o porquê
    const imagem = faker.image.url({ height: 1080, width: 1920 });
    const video = faker.image.url({ height: 1080, width: 1920 });
    const slug = `page-${i}`;
    const footer = faker.lorem.sentence();
    const footer2 = faker.lorem.paragraph();


    // juntando tudo nessa const aqui
    const data = { titulo, topicos, imagem, video, slug, footer, footer2 };

    // definindo o caminho e o nome do arquivo que vai ser salvo
    const filePath = path.join(outputDir, `${slug}.json`);

    // escreve o conteudo no arquivo JSON, com uma identacao de 2 espacinhos
    //stringify como sugere, transforma o JSON em STRING
    // JSON.stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    //para fins de debug
    console.log(`Gerado: ${filePath}`);
}
