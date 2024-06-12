const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: '' });

async function main() {
  try {
    const imagePath = path.join(__dirname, "../filho.png");

    const image = await openai.images.createVariation({
      image: fs.createReadStream(imagePath),
      n: 2
    });

    console.log(image.data);
  } catch (error) {
    console.error("Ocorreu um erro:", error.message);
  }
}

main();
