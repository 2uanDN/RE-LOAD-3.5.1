import { parseBlocks } from './src/utils/text-parser.js';

const aiOutput1 = `Here is my thought process.
<block_0_thinking>
I should do this.
</block_0_thinking>
<block_1_scene>
Scene text
</block_1_scene>
{
  "block_2_label_and_description": [],
  "block_3_inner_reaction": "silent"
}`;

const result1 = parseBlocks(aiOutput1);
console.log("Result 1:", JSON.stringify(result1, null, 2));
