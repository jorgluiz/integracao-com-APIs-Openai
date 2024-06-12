const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: '' });

async function main() {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "crie arquivo de corte silhouette imagem de coco, que o tamanho seja de uma folha a4",
      n: 1,
      style: "vivid",
      quality: "hd",
      size: "1024x1024",
    });

    if (response.data && response.data && response.data.length > 0) {
      const imageUrl = response.data[0].url;
      console.log("URL da imagem gerada:", imageUrl);
    } else {
      console.error("Erro ao gerar a imagem: Resposta da API incompleta ou vazia");
    }
  } catch (error) {
    console.error("Erro ao gerar a imagem:", error);
  }
}

main();



// chatGPT
// Dividir o processamento em várias etapas: Se possível, divida o processamento em várias etapas menores e execute cada etapa separadamente.
// Isso pode reduzir a carga na memória durante a execução do código.

// ___________________________________________________________________________________________________
// const OpenAI = require("openai");
// const fs = require("fs");
// const path = require("path");

// const openai = new OpenAI({ apiKey: 'sk-d995zWQlPZ7jFgMBvfsST3BlbkFJz8TyqwTSPyMq4CneWi' });

// // Caminho para a imagem original
// const imagePath = path.resolve(__dirname, '../pai.png');

// async function main() {
//   try {
//     // Ler os dados da imagem do disco
//     const imageData = fs.readFileSync(imagePath);

//     // Pré-processamento: Transformar a imagem em um buffer
//     const buffer = Buffer.from(imageData);

//     // Configurar o nome da imagem para que a API saiba que é um arquivo PNG
//     buffer.name = "image.png";

//     // Processamento principal: Enviar a imagem para a API e criar variações
//     const variations = await processImage(buffer);

//     // Pós-processamento: Salvar as imagens geradas no disco
//     await saveVariations(variations);

//     console.log("Processamento concluído com sucesso!");
//   } catch (error) {
//     console.error("Erro durante o processamento da imagem:", error);
//   }
// }

// // Função para enviar a imagem para a API e criar variações
// async function processImage(buffer) {
//   try {
//     const response = await openai.images.createVariation({
//       model: "dall-e-2",
//       image: buffer,
//       n: 1, // Defina o número de variações desejadas
//       size: "1024x1024", // Defina o tamanho das imagens de saída
//     });
//     return response.data.images;
//   } catch (error) {
//     throw new Error("Erro ao processar a imagem:", error);
//   }
// }

// // Função para salvar as variações da imagem no disco
// async function saveVariations(variations) {
//   const outputDir = path.resolve(__dirname, '../output');
//   try {
//     fs.mkdirSync(outputDir, { recursive: true });
//     for (let i = 0; i < variations.length; i++) {
//       const outputFilename = path.join(outputDir, `generated_image_${i}.png`);
//       fs.writeFileSync(outputFilename, Buffer.from(variations[i].data, 'base64'));
//       console.log(`Imagem ${i + 1} salva com sucesso: ${outputFilename}`);
//     }
//   } catch (error) {
//     throw new Error("Erro ao salvar as variações da imagem:", error);
//   }
// }

// main();

// ___________________________________________________________________________________________________

// Neste código, dividimos o processamento da imagem em três etapas:

// 1 Pré-processamento: Converte a imagem em um buffer para prepará-la para ser enviada para a API.

// 2 Processamento principal: Envia a imagem para a API e cria variações com base no modelo DALL-E.

// 3 Pós-processamento: Salva as variações da imagem geradas no disco.

// Essa abordagem divide o trabalho em etapas menores, o que pode ajudar a reduzir a carga na memória durante a execução do código.
