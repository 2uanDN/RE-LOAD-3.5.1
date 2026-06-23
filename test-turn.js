import { TurnCardUI } from './src/ui/components/turn-card-ui.js';
import { narrativeEngine } from './src/core/narrative-engine.js';
const mockTurn = {
  aiResponse: {
     block_0_thinking: "Thoughts",
     block_1_scene: "Scene",
     block_2_label_and_description: [],
     block_3_inner_reaction: "silent"
  },
  uiOnlyBlock0: "Thoughts"
};
const parsedRaw = narrativeEngine.parseThreeBlockResponse(mockTurn.aiResponse || '');
console.log("ParsedRaw:", parsedRaw);
const sourceBlock0 = mockTurn.uiOnlyBlock0 || parsedRaw.block0;
console.log("sourceBlock0:", sourceBlock0);
