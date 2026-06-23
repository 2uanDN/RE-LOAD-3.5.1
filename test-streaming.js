import { StreamingJsonParser } from './src/utils/streaming-json-parser.js';

const parser = new StreamingJsonParser();
const chunks = [
  "Garbage AI reasoning... \n",
  "<block_0_thinking>\n",
  "These are thoughts.\n",
  "</block_0_thinking>\n",
  "<block_1_scene>\n",
  "Hello World!\n"
];

for (const chunk of chunks) {
  parser.processChunk(chunk);
  const result = parser.parsePartialJson();
  console.log("Chunk:", JSON.stringify(chunk));
  console.log("_thinkingBuffer before parse:", JSON.stringify(parser._thinkingBuffer));
  console.log("Result:", JSON.stringify(result, null, 2));
  console.log("----------------------");
}
