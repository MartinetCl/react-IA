import { ChatGPTAPI } from 'chatgpt';

class ChatGptService {
  private api: ChatGPTAPI;
  constructor(apiKey) {
    this.api = new ChatGPTAPI({
      apiKey: apiKey,
    });
  }

  async sendMessage(question: string): Promise<string> {
    try {
      const result = await this.api.sendMessage(question, {
        systemMessage: 'You will give response and answer to a quizz game.',
      });

      return result.text;
    } catch (error) {
      // Gestion des erreurs ici
      console.error('Erreur lors de l\'appel à l\'API ChatGPT:', error);
      throw error;
    }
  }
}

export default ChatGptService;
