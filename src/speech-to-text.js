const fs = require("fs")
const path = require("path")
const OpenAI = require("openai")

const openai = new OpenAI({ apiKey: 'sk' });

const filePath = path.join(__dirname, "../Authentication-with-stripe-node.mp3");

const audioStream = fs.createReadStream(filePath);

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: audioStream,
    model: "whisper-1",
    response_format: "verbose_json",
    timestamp_granularities: ["word"]
  });

  console.log(transcription.text);
}
main();