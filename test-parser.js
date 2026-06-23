import { parseBlocks } from './src/utils/text-parser.js';

const aiOutput = `I am thinking literally very hard. This is raw text out of any block.
<block_0_thinking>
Let's see... step 1, step 2.
</block_0_thinking>
<block_1_scene>
Hello user
</block_1_scene>
{
  "block_2_label_and_description": [],
  "block_3_inner_reaction": "silent"
}`;

const result = parseBlocks(aiOutput);
console.log("Parsed result:", JSON.stringify(result, null, 2));
