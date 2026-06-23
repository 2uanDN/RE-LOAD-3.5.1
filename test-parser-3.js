import { _constructFromParsed } from './src/utils/text-parser.js';
import { parseBlocks } from './src/utils/text-parser.js';

const rawText1 = `garbage
<block_0_thinking>
Thoughts
</block_0_thinking>
<block_1_scene>
Scene
</block_1_scene>`;

const result1 = parseBlocks(rawText1);
console.log("Result1:", result1);

const parsed = JSON.parse('{"block_0_thinking": "", "block_1_scene": "SceneFromJson"}');
const result2 = _constructFromParsed(parsed, "Thoughts");
console.log("Result2:", result2);
