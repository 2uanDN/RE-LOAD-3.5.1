import { workerBridge } from '../workers/worker-bridge.js';
import { settingsManager } from './settings-manager.js';

class PromptAssembler {
  async buildPayload(sessionId, userInput, sessionContext, retrievedMemories) {
    let memory = await settingsManager.loadSetting("memory") || {};
    let safeInputLimit = memory.safeInputLimit ?? 150000;
    let systemTokens = memory.systemTokens ?? 40000;
    let userTokens = memory.userTokens ?? 100000;
    let tokenBudget = memory.tokenBudget ?? 10000;

    // Fallback if system + user + RAG tokens exceed safe limit
    if (systemTokens + userTokens + tokenBudget > safeInputLimit) {
      console.warn('[PromptAssembler] Budget sum exceeded safeInputLimit. Resetting to defaults.');
      safeInputLimit = 150000;
      systemTokens = 40000;
      userTokens = 100000;
      tokenBudget = 10000;
      
      memory.safeInputLimit = safeInputLimit;
      memory.systemTokens = systemTokens;
      memory.userTokens = userTokens;
      memory.tokenBudget = tokenBudget;
      await settingsManager.saveSetting("memory", memory);
    }

    return await workerBridge.dispatch('BUILD_PROMPT', {
      sessionId,
      userInput,
      sessionContext: {
        session: sessionContext.session,
        memoryTree: sessionContext.memoryTree,
        resolvedMilestones: sessionContext.resolvedMilestones,
        milestones: sessionContext.milestones,
        slidingWindow: sessionContext.slidingWindow
      },
      retrievedMemories,
      safeInputLimit,
      systemTokens,
      userTokens
    });
  }
}

export const promptAssembler = new PromptAssembler();

