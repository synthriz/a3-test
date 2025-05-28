// generatecontent.cjs para o template 3

// esse script gera 10 arquivos .json com conteudo filler para o CMS Tina,
// salvando em "content/paginatemplate3"

const fs = require('fs'); // modulo do node para trabalhar com sistema de arquivos
const path = require('path'); // modulo para manipular caminhos de arquivos
const { faker } = require('@faker-js/faker'); // lib pra gerar dados falsos realistas

// diretório onde os arquivos JSONs vao ser salvos => content/pagetemplate4
const outputDir = path.join(process.cwd(), 'content', 'paginatemplate4');

// garante q o diretorio exista (ou cria, caso nao exista)
fs.mkdirSync(outputDir, { recursive: true });

// loopzinho pra gerar i arquivos (page-i.json)
for (let i = 1; i <= 10; i++) {
    // gerando dados falsos pra preencher o conteudo do JSON
    const nomeProduto= faker.commerce.productName() + ' Natural';

    const destaque= faker.company.catchPhrase();

    const imagemProduto= faker.image.url({ width: 400, height: 400});

    const depoimento1 = faker.lorem.paragraph();
    const depoimento2 = faker.lorem.paragraph();

    const pessoa1 = faker.person.fullName();
    const pessoa2 = faker.person.fullName();

    // cria 5 frases(que virarao topicos), separados por \n
    // ref: https://fakerjs.dev/api/lorem.html#sentences
    // não estava gerando os separadores "\n", entao primeiro foi criado um array com os 14 elementos,
    // depois juntou (.join) em uma unica string,
    // pra depois, separar dnv em um array, mas quebrando onde existe \n
    const textoComQuebra = Array.from({ length: 3 }, () => faker.lorem.sentence({ min: 3, max: 3 })).join('\n');
    const beneficios = textoComQuebra.split('\n');

    const adjetivos = Array.from({ length: 3 }, () => faker.commerce.productAdjective());


    // call-to-action abaixo
    const ctaTexto= faker.company.buzzPhrase();
    const ctaSecundario= faker.company.catchPhrase();
    const ctaTerciario = faker.company.catchPhrase();

    const company = faker.company.name();

    const slug = `page-${i}`;


    // juntando tudo nessa const aqui
    const data = {
        nomeProduto,
        destaque,
        beneficios,
        adjetivos,
        imagemProduto,
        depoimento1,
        depoimento2,
        pessoa1,
        pessoa2,
        ctaTexto,
        ctaSecundario,
        ctaTerciario,
        company,
        slug
    };

    // definindo o caminho e o nome do arquivo que vai ser salvo
    const filePath = path.join(outputDir, `${slug}.json`);

    // escreve o conteudo no arquivo JSON, com uma identacao de 2 espacinhos
    //stringify como sugere, transforma o JSON em STRING
    // JSON.stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    //para fins de debug
    console.log(`Gerado: ${filePath}`);
}
